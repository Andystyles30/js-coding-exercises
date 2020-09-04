const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  } = require("../challenges/exercise006");
  
  describe("sumMultiples", () => {
    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
      expect(sumMultiples([1,3,5])).toBe(8);
      expect(sumMultiples([6,18,4,5,15,7])).toBe(44);
      expect(sumMultiples([4, 22])).toBe(0);
    });

    test("it works with decimal numbers", () => {
      expect(sumMultiples([1,3,5.0,1,30,10])).toBe(48);
      expect(sumMultiples([1,5,5.0,10,1,30,10,625])).toBe(685);
      expect(sumMultiples([1.00])).toBe(0);
    });

    test("it throws an exception if arr argument not passed to function", () => {
      expect(() => {
        sumMultiples();
      }).toThrow("arr is required");
    });

    test("it works with negative numbers", () => {
      expect(sumMultiples([1,3,-5])).toBe(-2);
    });
  });
  
