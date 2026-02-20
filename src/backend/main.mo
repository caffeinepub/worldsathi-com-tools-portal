import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import Migration "migration";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";

// Use explicit with clause for migration
(with migration = Migration.run)
actor {
  type UserProfile = {
    displayName : Text;
    bio : Text;
    favoriteTools : [Nat]; // Use Arrays for favoriteTools
    memberships : [Text];
    badges : [Text];
  };

  type ToolLegacy = {
    id : Nat;
    name : Text;
    description : Text;
    iconUrl : Text;
    favoriteCount : Nat;
    category : Text;
    usageCount : Nat;
  };

  type Tool = {
    id : Nat;
    name : Text;
    slug : Text;
    category : Text;
    description : Text;
    iconUrl : Text;
    favoriteCount : Nat;
    usageCount : Nat;
  };

  type UsageHistory = {
    toolId : Nat;
    timestamp : Time.Time;
  };

  type ToolCategory = {
    id : Nat;
    name : Text;
    description : Text;
  };

  type ToolPage = {
    id : Nat;
    title : Text;
    content : Text;
    files : [Storage.ExternalBlob]; // Use Array instead of List
    category : ToolCategory;
  };

  include MixinStorage();
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let userProfiles = Map.empty<Principal, UserProfile>();
  let tools = Map.empty<Nat, Tool>();
  let usageHistory = Map.empty<Principal, [UsageHistory]>();
  let toolCategories = Map.empty<Nat, ToolCategory>();
  let toolPages = Map.empty<Nat, ToolPage>();

  var toolPageIdCounter = 1;
  var toolCategoryIdCounter = 1;
  var isToolInitialized : Bool = false;

  // Initialize with expanded tools (admin only)
  public shared ({ caller }) func initializeTools() : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can initialize tools");
    };

    if (isToolInitialized) {
      Runtime.trap("Tools already initialized");
    };

    let newTools = [
      // Restored tools (10)
      { id = 1; name = "Web Browser"; slug = "web-browser"; description = "Browse the internet securely"; iconUrl = "browser.png"; favoriteCount = 0; category = "Browsers"; usageCount = 0 },
      { id = 2; name = "Password Manager"; slug = "password-manager"; description = "Store and manage passwords"; iconUrl = "password-manager.png"; favoriteCount = 0; category = "Security"; usageCount = 0 },
      { id = 3; name = "Cloud Storage"; slug = "cloud-storage"; description = "Safely store and access files online"; iconUrl = "cloud-storage.png"; favoriteCount = 0; category = "Productivity"; usageCount = 0 },
      { id = 4; name = "VPN"; slug = "vpn"; description = "Secure your internet connection with a Virtual Private Network"; iconUrl = "vpn.png"; favoriteCount = 0; category = "Security"; usageCount = 0 },
      { id = 5; name = "Music Streaming"; slug = "music-streaming"; description = "Listen to your favorite music online"; iconUrl = "music-streaming.png"; favoriteCount = 0; category = "Entertainment"; usageCount = 0 },
      { id = 6; name = "Video Streaming"; slug = "video-streaming"; description = "Watch movies and TV shows online"; iconUrl = "video-streaming.png"; favoriteCount = 0; category = "Entertainment"; usageCount = 0 },
      { id = 7; name = "Online Banking"; slug = "online-banking"; description = "Manage your money with online banking"; iconUrl = "banking.png"; favoriteCount = 0; category = "Finance"; usageCount = 0 },
      { id = 8; name = "Online Shopping"; slug = "online-shopping"; description = "Shop for items and clothes online"; iconUrl = "shopping.png"; favoriteCount = 0; category = "Shopping"; usageCount = 0 },
      { id = 9; name = "Travel Booking"; slug = "travel-booking"; description = "Book flights, hotels, and trips online"; iconUrl = "travel.png"; favoriteCount = 0; category = "Travel"; usageCount = 0 },
      { id = 10; name = "Social Media"; slug = "social-media"; description = "Stay connected with friends and family"; iconUrl = "social-media.png"; favoriteCount = 0; category = "Social"; usageCount = 0 }
    ];

    for (tool in newTools.values()) {
      tools.add(tool.id, tool);
    };
    isToolInitialized := true;
  };

  // Get a tool category by ID
  public query ({ caller }) func getToolCategory(id : Nat) : async ?ToolCategory {
    toolCategories.get(id);
  };

  // Get all tool categories
  public query ({ caller }) func getAllToolCategories() : async [ToolCategory] {
    toolCategories.values().toArray();
  };

  // Add a new tool category (admin only)
  public shared ({ caller }) func addToolCategory(name : Text, description : Text) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add tool categories");
    };
    let newCategory : ToolCategory = {
      id = toolCategoryIdCounter;
      name;
      description;
    };
    toolCategories.add(toolCategoryIdCounter, newCategory);
    toolCategoryIdCounter += 1;
    newCategory.id;
  };

  // Get a tool page by ID
  public query ({ caller }) func getToolPage(id : Nat) : async ?ToolPage {
    toolPages.get(id);
  };

  // Get all tool pages
  public query ({ caller }) func getAllToolPages() : async [ToolPage] {
    toolPages.values().toArray();
  };

  // Get tool pages by category
  public query ({ caller }) func getToolPagesByCategory(categoryId : Nat) : async [ToolPage] {
    let pages = toolPages.values().toArray();
    pages.filter(
      func(page) {
        page.category.id == categoryId;
      }
    );
  };

  // Add a new tool page (admin only)
  public shared ({ caller }) func addToolPage(title : Text, content : Text, categoryId : Nat, files : [Storage.ExternalBlob]) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add tool pages");
    };
    let category = toolCategories.get(categoryId);
    switch (category) {
      case (null) { Runtime.trap("Category not found") };
      case (?cat) {
        let newPage : ToolPage = {
          id = toolPageIdCounter;
          title;
          content;
          files;
          category = cat;
        };
        toolPages.add(toolPageIdCounter, newPage);
        toolPageIdCounter += 1;
        newPage.id;
      };
    };
  };

  // Get the caller's own profile
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  // Save the caller's own profile
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Get any user's profile - restricted to own profile or admin access
  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  // Users can save a tool to profile (requires user authentication)
  public shared ({ caller }) func saveToolToFavorites(toolId : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save favorites");
    };
    switch (userProfiles.get(caller)) {
      case (null) {
        let newProfile : UserProfile = {
          displayName = "Anonymous";
          bio = "";
          favoriteTools = [toolId]; // Use array for favoriteTools
          memberships = [];
          badges = [];
        };
        userProfiles.add(caller, newProfile);
      };
      case (?profile) {
        if (profile.favoriteTools.find<Nat>(func(id) { id == toolId }) != null) {
          Runtime.trap("Tool already saved");
        };
        userProfiles.add(caller, {
          profile with
          favoriteTools = profile.favoriteTools.concat([toolId]); // Concatenate arrays
        });
        switch (tools.get(toolId)) {
          case (null) {};
          case (?tool) {
            tools.add(toolId, {
              tool with favoriteCount = tool.favoriteCount + 1;
            });
          };
        };
      };
    };
  };

  // Track tool usage (requires user authentication)
  public shared ({ caller }) func trackToolUsage(toolId : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can track tool usage");
    };
    let history = switch (usageHistory.get(caller)) {
      case (null) { [] : [UsageHistory] };
      case (?h) { h };
    };
    let newEntry : UsageHistory = {
      toolId;
      timestamp = Time.now();
    };
    usageHistory.add(caller, history.concat([newEntry])); // Concatenate arrays
    switch (tools.get(toolId)) {
      case (null) {};
      case (?tool) {
        tools.add(toolId, {
          tool with usageCount = tool.usageCount + 1;
        });
      };
    };
  };

  // Find tool by name (search)
  public query ({ caller }) func findToolByName(searchTerm : Text) : async [Tool] {
    let lowerSearch = searchTerm.toLower();
    if (searchTerm.size() == 0) {
      return [];
    };

    let filteredTools = tools.filter(
      func(_id, tool) {
        tool.name.toLower().contains(#text lowerSearch);
      }
    );

    let result = filteredTools.values();
    result.toArray();
  };

  // Add or update a badge to caller's profile
  public shared ({ caller }) func addBadgeToProfile(badge : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can add badges");
    };
    switch (userProfiles.get(caller)) {
      case (null) {
        let newProfile : UserProfile = {
          displayName = "Anonymous";
          bio = "";
          favoriteTools = [];
          memberships = [];
          badges = [badge]; // Use array for badges
        };
        userProfiles.add(caller, newProfile);
      };
      case (?profile) {
        userProfiles.add(caller, {
          profile with badges = profile.badges.concat([badge]); // Concatenate arrays
        });
      };
    };
  };
};
