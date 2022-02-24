import {maximumProfit} from "./index";

it("should give 14 for [8, 5, 12, 9, 19, 1]", function() {
    const prices = [8, 5, 12, 9, 19, 1];
    const profit = 14;
    expect(maximumProfit(prices)).toBe(profit);
})


it("should give 7 for [2, 4, 9, 3, 8]", function() {
    const prices = [2, 4, 9, 3, 8];
    const profit = 7;
    expect(maximumProfit(prices)).toBe(profit);
})


it("should give 0 for [21, 12, 11, 9, 6, 3]", function() {
    const prices = [21, 12, 11, 9, 6, 3];
    const profit = 0;
    expect(maximumProfit(prices)).toBe(profit);
})