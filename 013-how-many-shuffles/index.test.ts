import {countShuffles, faroShuffle} from "./index";


it("should give [1, 5, 2, 6, 3, 7, 4, 8] for [1, 2, 3, 4, 5, 6, 7, 8]", function() {
    const inpArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const shuffledArray = [1, 5, 2, 6, 3, 7, 4, 8];
    expect(faroShuffle(inpArray)).toEqual(shuffledArray);
});

it("should give 3 shuffles for 8 cards", function() {
    const cardAmount = 8;
    const shufflesAmount = 3;
    expect(countShuffles(cardAmount)).toEqual(shufflesAmount);
});

it("should give 12 shuffles for 14 cards", function() {
    const cardAmount = 14;
    const shufflesAmount = 12;
    expect(countShuffles(cardAmount)).toEqual(shufflesAmount);
});

it("should give 8 shuffles for 52 cards", function() {
    const cardAmount = 52;
    const shufflesAmount = 8;
    expect(countShuffles(cardAmount)).toEqual(shufflesAmount);
});