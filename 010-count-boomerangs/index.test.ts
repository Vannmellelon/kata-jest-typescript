import {countBoomerangs} from "./index";

it("should give 2 for [9, 5, 9, 5, 1, 1, 1]", function() {
    const inp = [9, 5, 9, 5, 1, 1, 1];
    const nBomerangs = 2;
    expect(countBoomerangs(inp)).toEqual(nBomerangs);
});

it("should give 1 for [5, 6, 6, 7, 6, 3, 9]", function() {
    const inp = [5, 6, 6, 7, 6, 3, 9];
    const nBomerangs = 1;
    expect(countBoomerangs(inp)).toEqual(nBomerangs);
});

it("should give 0 for [4, 4, 4, 9, 9, 9, 9]", function() {
    const inp = [4, 4, 4, 9, 9, 9, 9];
    const nBomerangs = 0;
    expect(countBoomerangs(inp)).toEqual(nBomerangs);
});

it("should give 5 for [1, 7, 1, 7, 1, 7, 1]", function() {
    const inp = [1, 7, 1, 7, 1, 7, 1];
    const nBomerangs = 5;
    expect(countBoomerangs(inp)).toEqual(nBomerangs);
});