const {
    sumDigits,
    createRange
  } = require("../challenges/exercise007");
  
  describe("sumDigits", () => {
    test("it returns the correct sum of all digits", () => {
      expect(sumDigits(123)).toBe(6);
      expect(sumDigits(983645372)).toBe(47);
      expect(sumDigits(45)).toBe(9);
      expect(sumDigits(1234)).toBe(10);
    });
  });

  describe("createRange", () => {
    test("it returns the correct array results", () => {
      expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
      expect(createRange(2, 50, 5)).toEqual([2,7,12,17,22,27,32,37,42,47]);
      expect(createRange(0, 30, 6)).toEqual([0,6,12,18,24,30]);
    });
  });