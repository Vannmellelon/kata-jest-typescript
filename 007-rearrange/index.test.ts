import {rearrangeSentence} from "./index";

it("should give 'This is a test' for 'is2 Thi1s T4est 3a'", function() {
    const sent = "is2 Thi1s t4est 3a";
    const rearrangedSentence = "This is a test";
    expect(rearrangeSentence(sent)).toEqual<string>(rearrangedSentence);
});

it("should give 'For the good of the people' for '4of Fo1r pe6ople g3ood th5e the2'", function() {
    const sent = "4of Fo1r pe6ople g3ood th5e the2";
    const rearrangedSentence = "For the good of the people";
    expect(rearrangeSentence(sent)).toEqual<string>(rearrangedSentence);
});

it("should give 'JavaScript is so damn weird' for '5weird i2s JavaScri1pt dam4n so3'", function() {
    const sent = "5weird i2s JavaScri1pt dam4n so3";
    const rearrangedSentence = "JavaScript is so damn weird";
    expect(rearrangeSentence(sent)).toEqual<string>(rearrangedSentence);
});

it("should give \"\" for \" \"", function() {
    const sent = " ";
    const rearrangedSentence = "";
    expect(rearrangeSentence(sent)).toEqual<string>(rearrangedSentence);
});