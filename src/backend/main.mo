import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import AccessControl "authorization/access-control";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";
import MixinAuthorization "authorization/MixinAuthorization";


// Declare actor using with-clause for migration

actor {
  type UserProfile = {
    displayName : Text;
    bio : Text;
    favoriteTools : [Nat]; // Use Arrays for favoriteTools
    memberships : [Text];
    badges : [Text];
  };

  type Tool = {
    id : Nat;
    name : Text;
    description : Text;
    iconUrl : Text;
    favoriteCount : Nat;
    category : Text;
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
      // Browsers (8)
      { id = 1; name = "Safari"; description = "Web browser for Apple devices"; iconUrl = "safari.png"; favoriteCount = 0; category = "Browsers"; usageCount = 0 },
      { id = 2; name = "Google Chrome"; description = "Popular cross-platform web browser"; iconUrl = "chrome.png"; favoriteCount = 0; category = "Browsers"; usageCount = 0 },
      { id = 3; name = "Mozilla Firefox"; description = "Open-source web browser"; iconUrl = "firefox.png"; favoriteCount = 0; category = "Browsers"; usageCount = 0 },
      { id = 4; name = "Opera"; description = "Feature-rich web browser"; iconUrl = "opera.png"; favoriteCount = 0; category = "Browsers"; usageCount = 0 },

      // Productivity (8)
      { id = 5; name = "Google Docs"; description = "Collaborative document editing"; iconUrl = "googledocs.png"; favoriteCount = 0; category = "Productivity"; usageCount = 0 },
      { id = 6; name = "Google Sheets"; description = "Collaborative spreadsheet tool"; iconUrl = "googlesheets.png"; favoriteCount = 0; category = "Productivity"; usageCount = 0 },
      { id = 7; name = "Microsoft Office Online"; description = "Online Office suite from Microsoft"; iconUrl = "officeonline.png"; favoriteCount = 0; category = "Productivity"; usageCount = 0 },
      { id = 8; name = "Notion"; description = "All-in-one workspace for notes, tasks, and collaboration"; iconUrl = "notion.png"; favoriteCount = 0; category = "Productivity"; usageCount = 0 },

      // Photography (12)
      { id = 9; name = "Google Photos"; description = "Photo storage and organization"; iconUrl = "googlephotos.png"; favoriteCount = 0; category = "Photography"; usageCount = 0 },
      { id = 10; name = "Pixlr Editor"; description = "Online photo editing tool"; iconUrl = "pixlr.png"; favoriteCount = 0; category = "Photography"; usageCount = 0 },
      { id = 11; name = "Canva"; description = "Graphic design and photo editing platform"; iconUrl = "canva.png"; favoriteCount = 0; category = "Photography"; usageCount = 0 },

      // Writing (12)
      { id = 13; name = "Grammarly"; description = "Grammar and spell checking tool"; iconUrl = "grammarly.png"; favoriteCount = 0; category = "Writing"; usageCount = 0 },
      { id = 14; name = "Hemingway Editor"; description = "Writing clarity and readability analysis"; iconUrl = "hemingway.png"; favoriteCount = 0; category = "Writing"; usageCount = 0 },
      { id = 15; name = "Evernote"; description = "Note-taking and organization tool"; iconUrl = "evernote.png"; favoriteCount = 0; category = "Writing"; usageCount = 0 },
      { id = 16; name = "Google Keep"; description = "Online note-taking and reminders"; iconUrl = "googlekeep.png"; favoriteCount = 0; category = "Writing"; usageCount = 0 },

      // Video (12)
      { id = 17; name = "YouTube"; description = "Video sharing and streaming platform"; iconUrl = "youtube.png"; favoriteCount = 0; category = "Video"; usageCount = 0 },
      { id = 18; name = "Vimeo"; description = "Video hosting and sharing platform"; iconUrl = "vimeo.png"; favoriteCount = 0; category = "Video"; usageCount = 0 },
      { id = 19; name = "Kapwing"; description = "Online video editing tool"; iconUrl = "kapwing.png"; favoriteCount = 0; category = "Video"; usageCount = 0 },
      { id = 20; name = "Animoto"; description = "Online video creation platform"; iconUrl = "animoto.png"; favoriteCount = 0; category = "Video"; usageCount = 0 },

      // Audio (12)
      { id = 21; name = "Spotify"; description = "Music streaming platform"; iconUrl = "spotify.png"; favoriteCount = 0; category = "Audio"; usageCount = 0 },
      { id = 22; name = "SoundCloud"; description = "Music sharing and streaming platform"; iconUrl = "soundcloud.png"; favoriteCount = 0; category = "Audio"; usageCount = 0 },
      { id = 23; name = "Audacity"; description = "Audio recording and editing software"; iconUrl = "audacity.png"; favoriteCount = 0; category = "Audio"; usageCount = 0 },
      { id = 24; name = "Anchor"; description = "Podcast creation and distribution platform"; iconUrl = "anchor.png"; favoriteCount = 0; category = "Audio"; usageCount = 0 },

      // Drawing (12)
      { id = 25; name = "Sketchpad"; description = "Online drawing and sketching tool"; iconUrl = "sketchpad.png"; favoriteCount = 0; category = "Drawing"; usageCount = 0 },
      { id = 26; name = "Aggie.io"; description = "Collaborative drawing platform"; iconUrl = "aggie.png"; favoriteCount = 0; category = "Drawing"; usageCount = 0 },

      // Social (8)
      { id = 33; name = "Facebook"; description = "Social networking and communication"; iconUrl = "facebook.png"; favoriteCount = 0; category = "Social"; usageCount = 0 },
      { id = 34; name = "Twitter"; description = "Social networking and microblogging platform"; iconUrl = "twitter.png"; favoriteCount = 0; category = "Social"; usageCount = 0 },

      // Education (8)
      { id = 41; name = "Khan Academy"; description = "Free online courses and learning tool"; iconUrl = "khanacademy.png"; favoriteCount = 0; category = "Education"; usageCount = 0 },
      { id = 42; name = "Coursera"; description = "Online courses and certificate programs"; iconUrl = "coursera.png"; favoriteCount = 0; category = "Education"; usageCount = 0 },

      // Webmail (8)
      { id = 49; name = "Gmail"; description = "Email service by Google"; iconUrl = "gmail.png"; favoriteCount = 0; category = "Webmail"; usageCount = 0 },
      { id = 50; name = "Outlook"; description = "Email service by Microsoft"; iconUrl = "outlook.png"; favoriteCount = 0; category = "Webmail"; usageCount = 0 },

      // Shopping (8)
      { id = 57; name = "Amazon"; description = "Online shopping and marketplace"; iconUrl = "amazon.png"; favoriteCount = 0; category = "Shopping"; usageCount = 0 },
      { id = 58; name = "eBay"; description = "Online marketplace for auctions and sales"; iconUrl = "ebay.png"; favoriteCount = 0; category = "Shopping"; usageCount = 0 },

      // News (8)
      { id = 65; name = "Google News"; description = "Aggregated news and headlines"; iconUrl = "googlenews.png"; favoriteCount = 0; category = "News"; usageCount = 0 },
      { id = 66; name = "BBC News"; description = "International news and coverage"; iconUrl = "bbcnews.png"; favoriteCount = 0; category = "News"; usageCount = 0 },

      // Weather (4)
      { id = 73; name = "Weather.com"; description = "Weather forecasts and information"; iconUrl = "weatherdotcom.png"; favoriteCount = 0; category = "Weather"; usageCount = 0 },
      { id = 74; name = "AccuWeather"; description = "Weather forecasts and radar"; iconUrl = "accuweather.png"; favoriteCount = 0; category = "Weather"; usageCount = 0 },

      // Finance (4)
      { id = 77; name = "Mint"; description = "Personal finance and budgeting tool"; iconUrl = "mint.png"; favoriteCount = 0; category = "Finance"; usageCount = 0 },
      { id = 78; name = "Robinhood"; description = "Stock trading and investing platform"; iconUrl = "robinhood.png"; favoriteCount = 0; category = "Finance"; usageCount = 0 },

      // Communication (8)
      { id = 81; name = "Slack"; description = "Team messaging and collaboration platform"; iconUrl = "slack.png"; favoriteCount = 0; category = "Communication"; usageCount = 0 },
      { id = 82; name = "Zoom"; description = "Video conferencing and calls tool"; iconUrl = "zoom.png"; favoriteCount = 0; category = "Communication"; usageCount = 0 }
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
