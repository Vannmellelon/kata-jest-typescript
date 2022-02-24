import {doubleLetterSplit, doubleLetterSplitRegEx} from "./index";

it("should give [let, ter] for Letter", function() {
    const word = "Letter";
    const splitWord = ["let", "ter"];
    expect(doubleLetterSplit(word)).toEqual(splitWord);
})

it("should give [real, ly] for Really", function() {
    const word = "Really";
    const splitWord = ["real", "ly"];
    expect(doubleLetterSplit(word)).toEqual(splitWord);
})

it("should give [hap, py] for Happy", function() {
    const word = "Happy";
    const splitWord = ["hap", "py"];
    expect(doubleLetterSplit(word)).toEqual(splitWord);
})

it("should give [shal, l] for Shall", function() {
    const word = "Shall";
    const splitWord = ["shal", "l"];
    expect(doubleLetterSplit(word)).toEqual(splitWord);
})

it("should give [to, ol] for Tool", function() {
    const word = "Tool";
    const splitWord = ["to", "ol"];
    expect(doubleLetterSplit(word)).toEqual(splitWord);
})

it("should give [mis, sis, sip, pi] for Mississippi", function() {
    const word = "Mississippi";
    const splitWord = ["mis", "sis", "sip", "pi"];
    expect(doubleLetterSplit(word)).toEqual(splitWord);
})

it("should give [] for EASY", function() {
    const word = "EASY";
    const splitWord = [];
    expect(doubleLetterSplit(word)).toEqual(splitWord);
})

// Regex
/*
it("should give [mis, sis, sip, pi] for Mississippi", function() {
    const word = "Mississippi";
    const splitWord = ["mis", "sis", "sip", "pi"];
    expect(doubleLetterSplitRegEx(word)).toEqual(splitWord);
})

it("should give [] for EASY", function() {
    const word = "EASY";
    const splitWord = [];
    expect(doubleLetterSplitRegEx(word)).toEqual(splitWord);
})
*/