import {replaceVowel} from "./index";

it("should give \"k1r1ch3\" for \"karAchi\"", function() {
    const inp = "karAchi";
    const vowelsReplaced = "k1r1ch3";
    expect(replaceVowel(inp)).toEqual(vowelsReplaced);
});
it("should give \"ch2mb5r\" for \"chEmBur\"", function() {
    const inp = "chEmBur";
    const vowelsReplaced = "ch2mb5r";
    expect(replaceVowel(inp)).toEqual(vowelsReplaced);
});
it("should give \"kh1ndb1r3\" for \"khandbari\"", function() {
    const inp = "khandbari";
    const vowelsReplaced = "kh1ndb1r3";
    expect(replaceVowel(inp)).toEqual(vowelsReplaced);
});
it("should give \"l2x3c1l\" for \"LexiCAl\"", function() {
    const inp = "LexiCAl";
    const vowelsReplaced = "l2x3c1l";
    expect(replaceVowel(inp)).toEqual(vowelsReplaced);
});
it("should give \"f5nct34ns\" for \"fuNctionS\"", function() {
    const inp = "fuNctionS";
    const vowelsReplaced = "f5nct34ns";
    expect(replaceVowel(inp)).toEqual(vowelsReplaced);
});
it("should give \"21sy\" for \"EASY\"", function() {
    const inp = "EASY";
    const vowelsReplaced = "21sy";
    expect(replaceVowel(inp)).toEqual(vowelsReplaced);
});