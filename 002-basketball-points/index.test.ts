import {points} from "./index";

it("should score 5 for 1 twoPointer and 1 threePointer", function() {
    const twoPointer = 1;
    const threePointer = 1;
    const score = 5;
    expect(points(twoPointer, threePointer)).toBe(score);
})

it("should score 29 for 7 twoPointer and 5 threePointer", function() {
    const twoPointer = 7;
    const threePointer = 5;
    const score = 29;
    expect(points(twoPointer, threePointer)).toBe(score);
})

it("should score 100 for 38 twoPointer and 8 threePointer", function() {
    const twoPointer = 38;
    const threePointer = 8;
    const score = 100;
    expect(points(twoPointer, threePointer)).toBe(score);
})

it("should throw if twoPointer is undefined", function() {
    const twoPointer = undefined;
    const threePointer = 1;
    const score = 5;
    const errorMsg = "TwoPointer is undefined";
    expect(() => points(twoPointer, threePointer)).toThrow(errorMsg);
})