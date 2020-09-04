const {
    sumDigits
  } = require("../challenges/exercise007");
  
  describe("sumDigits", () => {
    test("it returns the correct sum of all digits", () => {
      expect(sumDigits(123)).toBe(6);
      expect(sumDigits(983645372)).toBe(47);
      expect(sumDigits(45)).toBe(9);
      expect(sumDigits(1234)).toBe(10);
    });
  });