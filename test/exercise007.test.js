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

  test("it throws an exception if n argument not passed to function or is not a number", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");

    expect(() => {
      sumDigits("foo");
    }).toThrow("type number is required for n");

    expect(() => {
      sumDigits(true);
    }).toThrow("type number is required for n");
  });

  test("it throws an exception if n argument passed to function is less than 0", () => {
    expect(() => {
      sumDigits(-10);
    }).toThrow("n must be greater than 0");
  });
});

describe("createRange", () => {
  test("it returns the correct array results", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(2, 50, 5)).toEqual([2, 7, 12, 17, 22, 27, 32, 37, 42, 47]);
    expect(createRange(0, 30, 6)).toEqual([0, 6, 12, 18, 24, 30]);
  });

  test("it throws an exception if start argument not passed to function or is not a number", () => {
    expect(() => {
      createRange();
    }).toThrow("start is required");

    expect(() => {
      createRange({}, 11, 2);
    }).toThrow("type number is required for all arguments");

    expect(() => {
      createRange(true, 11, 2);
    }).toThrow("type number is required for all arguments");
  });

  test("it throws an exception if step argument not passed to function or is not a number", () => {
    expect(() => {
      createRange(1,6);
    }).toThrow("type number is required for all arguments");

    expect(() => {
      createRange(1, {}, 2);
    }).toThrow("type number is required for all arguments");

    expect(() => {
      createRange(1, true, 2);
    }).toThrow("type number is required for all arguments");
  });

  test("it throws an exception if end and step arguments not passed to function or is not a number", () => {
    expect(() => {
      createRange(1);
    }).toThrow("end is required");
  });

  test("it throws an exception if any argument passed to function is less than 0", () => {
    expect(() => {
      createRange(-10, 10, 2);
    }).toThrow("arguments must be greater than 0");
    expect(() => {
      createRange(10, -10, 2);
    }).toThrow("arguments must be greater than 0");
    expect(() => {
      createRange(10, 10, -2);
    }).toThrow("arguments must be greater than 0");
  });
});

describe("getScreentimeAlertList", () => {
  test("returns an array of the usernames of users who have used more than 100 minutes of screentime for a given date", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
          { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
          { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
          { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
        ]
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
          { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
          { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
        ]
      },
    ];
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
  });

  test("returns an array of the usernames of userswhen there is more than one result", () => {
    const users = [
      {
        username: "JB_123478",
        name: "Joe Bloggs",
        screenTime: [
          { date: "2019-05-01", usage: { twitter: 50, instagram: 22, facebook: 40 } },
          { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
          { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
          { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
          { date: "2019-06-11", usage: { mapMyRun: 69, whatsApp: 30, facebook: 6, safari: 0 } },
        ]
      },
      {
        username: "tim_b_1981",
        name: "Tim Bean",
        screenTime: [
          { date: "2019-06-11", usage: { mapMyRun: 100, whatsApp: 200, facebook: 0, safari: 10 } },
          { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
          { date: "2019-06-04", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
        ]
      },
      {
        username: "james_b_1987",
        name: "James Bond",
        screenTime: [
          { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 10, facebook: 0, safari: 10 } },
          { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
          { date: "2019-06-04", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
        ]
      },
    ];
    expect(getScreentimeAlertList(users, "2019-06-11")).toEqual([
      "JB_123478",
      "tim_b_1981",
    ]);
  });
  test("it throws an exception if user argument passed to function is not an object", () => {
    expect(() => {
      getScreentimeAlertList(2, "2019-01-06");
    }).toThrow("users is required and must be an object");
  });
  test("it throws an exception if user argument not passed", () => {
    expect(() => {
      getScreentimeAlertList();
    }).toThrow("users is required and must be an object");
  });
  test("it throws an exception if date argument passed to function is not a string", () => {
    expect(() => {
      getScreentimeAlertList({}, true);
    }).toThrow("date is required and must be a string in the format 2019-05-04");
  });
  test("it throws an exception if date argument not passed", () => {
    expect(() => {
      getScreentimeAlertList({});
    }).toThrow("date is required and must be a string in the format 2019-05-04");
  });
});

describe("hexToRGB", () => {
  test("returns correct RGB code object for red, green and blue keys from a hex code string input", () => {
    expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
  });
  test("it throws an exception if hexStr argument not passed", () => {
    expect(() => {
      hexToRGB();
    }).toThrow("hexStr is required");
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
  test("returns correct winner given the board results in array of arrays format", () => {
    const board = [
      ["0", "X", null],
      ["X", "0", null],
      ["X", null, "0"]
    ];
    expect(findWinner(board)).toEqual("0");
  });
  test("returns null when there is no winner", () => {
    const board = [
      ["0", "X", null],
      ["X", null, "0"],
      ["X", null, "0"]
    ];
    expect(findWinner(board)).toEqual(null);
  });
  test("returns null when the board is an empty array", () => {
    const board = [];
    expect(findWinner(board)).toEqual(null);
  });
  test("it throws an exception if board argument not passed", () => {
    expect(() => {
      findWinner();
    }).toThrow("board is required");
  });
  test("it throws an exception if board argument not an object", () => {
    expect(() => {
      findWinner(1);
    }).toThrow("board argument should be an object (array)");
  });
});