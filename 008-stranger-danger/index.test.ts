import {strangerDanger} from "./index";

it("should give [[\"spot\", \"see\"], []] for \"See Spot run. See Spot jump. Spot likes jumping. See Spot fly.\"", function() {
    const sent = "See Spot run. See Spot jump. Spot likes jumping. See Spot fly.";
    const aquaintaincesAndFriends = [["spot", "see"], []];
    expect(strangerDanger(sent)).toEqual(aquaintaincesAndFriends);
});