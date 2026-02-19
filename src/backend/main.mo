import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import AccessControl "authorization/access-control";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";
import MixinAuthorization "authorization/MixinAuthorization";



actor {
  type UserProfile = {
    displayName : Text;
    bio : Text;
    favoriteTools : [Nat];
    memberships : [Text];
    badges : [Text];
  };

  type Tool = {
    id : Nat;
    name : Text;
    description : Text;
    iconUrl : Text;
    favoriteCount : Nat;
  };

  type UsageHistory = {
    toolId : Nat;
    timestamp : Time.Time;
  };

  include MixinStorage();
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let userProfiles = Map.empty<Principal, UserProfile>();
  let tools = Map.empty<Nat, Tool>();
  let usageHistory = Map.empty<Principal, [UsageHistory]>();

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

  // Users can save a tool to profile (methods can be called by guests)
  public shared ({ caller }) func saveToolToFavorites(toolId : Nat) : async () {
    switch (userProfiles.get(caller)) {
      case (null) {
        let newProfile : UserProfile = {
          displayName = "Anonymous";
          bio = "";
          favoriteTools = [toolId];
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
          favoriteTools = profile.favoriteTools.concat([toolId]);
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

  // Track tool usage (methods can be called by guests)
  public shared ({ caller }) func trackToolUsage(toolId : Nat) : async () {
    let history = switch (usageHistory.get(caller)) {
      case (null) { [] };
      case (?h) { h };
    };
    let newEntry : UsageHistory = {
      toolId;
      timestamp = Time.now();
    };
    usageHistory.add(caller, history.concat([newEntry]));
  };
};
