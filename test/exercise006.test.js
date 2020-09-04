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
  });
  
