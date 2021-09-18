const exp = require("constants");
const { mean, median, mode } = require("./mathHelpers");

describe("mean function", () => {
    test("mean should average the array of numbers", () => {
        const num = mean([4, 6, 10, 5]);
        expect(num).toEqual(6.25);
    });
    test("mean should return a number", () => {
        const num = mean([4, 6, 10, 5]);
        expect(num).toEqual(expect.any(Number));
        expect(num).not.toEqual(expect.any(String));
    });
});

describe("mode function", () => {
    test("mode should return an array of most frequent numbers shown in the input array if mode exists", () => {
        const resultArray = mode([4, 6, 10, 5, 5]);
        expect(resultArray).toEqual([5]);
    });
    test("mode should return an array with a number from the input array if mode exists", () => {
        const resultArray = mode([4, 6, 10, 5, 5]);
        expect([4, 6, 10, 5, 5]).toContain(resultArray[0]);
    });
    test("mode should return an array", () => {
        const resultArray = mode([4, 6, 10, 5, 5]);
        expect(resultArray).toEqual(expect.any(Array));
        expect(resultArray).not.toEqual(expect.any(String));
        expect(resultArray).not.toEqual(expect.any(Number));
    });
});
