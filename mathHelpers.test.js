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
