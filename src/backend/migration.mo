import Map "mo:core/Map";
import Principal "mo:core/Principal";

module {
  type UserProfile = {
    userId : Principal;
    registrationDate : Int;
    email : ?Text;
    displayName : ?Text;
  };

  type UserFavorites = {
    userId : Principal;
    favoriteToolIds : [Text];
  };

  type ToolUsageRecord = {
    userId : Principal;
    toolId : Text;
    timestamp : Int;
    usageCount : Nat;
  };

  type SearchHistory = {
    userId : Principal;
    searchQuery : Text;
    timestamp : Int;
    resultsCount : Nat;
  };

  type UserPreferences = {
    userId : Principal;
    theme : Text;
    defaultMeasurementUnit : ?Text;
    notificationSettings : ?Text;
  };

  type UsageStats = {
    dailyUsage : Nat;
    weeklyUsage : Nat;
    totalUsage : Nat;
    savedToolsCount : Nat;
  };

  type UserUsageRecord = {
    timestamp : Int;
    toolId : Text;
    userId : Principal;
  };

  type DailyAggregate = {
    date : Int;
    totalUses : Nat;
  };

  type WeeklyAggregate = {
    weekStart : Int;
    totalUses : Nat;
  };

  type UsageReport = {
    dailyStats : [DailyAggregate];
    weeklyStats : [WeeklyAggregate];
    savedToolsCount : Nat;
    totalUsage : Nat;
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
    tags : [Text];
    route : Text;
    iconName : Text;
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
    files : [Blob];
    category : ToolCategory;
  };

  type LegacyActor = {
    userProfiles : Map.Map<Principal, UserProfile>;
    userFavorites : Map.Map<Principal, UserFavorites>;
    toolUsageRecords : Map.Map<Text, ToolUsageRecord>;
    userPreferences : Map.Map<Principal, UserPreferences>;
    toolCategories : Map.Map<Nat, ToolCategory>;
    toolPages : Map.Map<Nat, ToolPage>;
    tools : Map.Map<Nat, Tool>;
    searchHistory : [SearchHistory];
    toolPageIdCounter : Nat;
    toolCategoryIdCounter : Nat;
    isToolInitialized : Bool;
    legacyUserProfiles : Map.Map<Principal, UserProfileLegacy>;
  };

  type UserProfileLegacy = {
    displayName : Text;
    bio : Text;
    favoriteTools : [Nat];
    memberships : [Text];
    badges : [Text];
  };

  type NewActor = {
    userProfiles : Map.Map<Principal, UserProfile>;
    userFavorites : Map.Map<Principal, UserFavorites>;
    toolUsageRecords : Map.Map<Text, ToolUsageRecord>;
    userPreferences : Map.Map<Principal, UserPreferences>;
    toolCategories : Map.Map<Nat, ToolCategory>;
    toolPages : Map.Map<Nat, ToolPage>;
    tools : Map.Map<Nat, Tool>;
    searchHistory : [SearchHistory];
    toolPageIdCounter : Nat;
    toolCategoryIdCounter : Nat;
    isToolInitialized : Bool;
    usageStats : Map.Map<Principal, UsageStats>;
    usageReports : Map.Map<Principal, UsageReport>;
    userUsageRecords : Map.Map<Text, UserUsageRecord>;
  };

  public func run(old : LegacyActor) : NewActor {
    {
      userProfiles = old.userProfiles;
      userFavorites = old.userFavorites;
      toolUsageRecords = old.toolUsageRecords;
      userPreferences = old.userPreferences;
      toolCategories = old.toolCategories;
      toolPages = old.toolPages;
      tools = old.tools;
      searchHistory = old.searchHistory;
      toolPageIdCounter = old.toolPageIdCounter;
      toolCategoryIdCounter = old.toolCategoryIdCounter;
      isToolInitialized = old.isToolInitialized;
      usageStats = Map.empty<Principal, UsageStats>();
      usageReports = Map.empty<Principal, UsageReport>();
      userUsageRecords = Map.empty<Text, UserUsageRecord>();
    };
  };
};
