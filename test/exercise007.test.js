const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
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

  describe("createRange", () => {
    test("it returns the correct array results", () => {
      expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
      expect(createRange(2, 50, 5)).toEqual([2,7,12,17,22,27,32,37,42,47]);
      expect(createRange(0, 30, 6)).toEqual([0,6,12,18,24,30]);
    });
  });

  describe("getScreentimeAlertList", () => {
    test("returns an array of the usernames of users who have used more than 100 minutes of screentime for a given date", () => {
      const users =  [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
                       { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                       { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                       { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                       { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                      ]
          },
          {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
                       { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                       { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                       { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                      ]
          },
      ];
      expect(getScreentimeAlertList(users, "2019-05-04")).toEqual([ "beth_1234" ]);
    });
  });

  describe("hexToRGB", () => {
    test("returns correct RGB code object for red, green and blue keys from a hex code string input", () => {
      expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
    });
  });

  describe("findWinner", () => {
    test("returns correct winner given the board results in array of arrays format", () => {
      const board = [
        ["X", "0", null],
        ["X", null, "0"],
        ["X", null, "0"]
      ];
      expect(findWinner(board)).toEqual("X");
    });
  });