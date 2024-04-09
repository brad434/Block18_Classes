const { multiplication, concatOdds } = require("./index.js");

describe("let multiple", () => {
  test("multiple two numbers to return a single value", () => {
    expect(multiplication(2, 3)).toBe(6);
  });
});

describe("let concat", () => {
  test("add two arrays, get odds only, ascending order", () => {
    expect(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).toBe([
      -1, 1, 3, 9, 15,
    ]);
  });
});
