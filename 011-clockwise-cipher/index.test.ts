import {clockwiseCipher} from "./index";

it("should give \"Ms ussahr nHaaib\" for \"Mubashir Hassan\"", function() {
    const inpText = "Mubashir Hassan";
    const cipherText = "Ms ussahr nHaaib";
    expect(clockwiseCipher(inpText)).toEqual(cipherText);
});

it('should give "M ParsoMc nhteat" for "Matt MacPherson"', function() {
    const inpText = "Matt MacPherson";
    const cipherText = "M ParsoMc nhteat";
    expect(clockwiseCipher(inpText)).toEqual(cipherText);
});

