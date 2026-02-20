import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
  // Old Tool type definition (without slug)
  type OldTool = {
    id : Nat;
    name : Text;
    description : Text;
    iconUrl : Text;
    favoriteCount : Nat;
    category : Text;
    usageCount : Nat;
  };

  // New Tool type definition with slug
  type NewTool = {
    id : Nat;
    name : Text;
    slug : Text;
    category : Text;
    description : Text;
    iconUrl : Text;
    favoriteCount : Nat;
    usageCount : Nat;
  };

  // Migration function to transform old tools map
  public func run(oldActor : { tools : Map.Map<Nat, OldTool> }) : { tools : Map.Map<Nat, NewTool> } {
    let newTools = oldActor.tools.map<Nat, OldTool, NewTool>(
      func(_id, oldTool) {
        {
          oldTool with
          slug = "legacy" // Default value for historical tools
        };
      }
    );
    { tools = newTools };
  };
};
