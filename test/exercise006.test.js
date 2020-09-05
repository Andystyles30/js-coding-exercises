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
    expect(sumMultiples([1, 3, 5])).toBe(8);
    expect(sumMultiples([6, 18, 4, 5, 15, 7])).toBe(44);
    expect(sumMultiples([4, 22])).toBe(0);
  });

  test("it works with decimal numbers", () => {
    expect(sumMultiples([1, 3, 5.0, 1, 30, 10])).toBe(48);
    expect(sumMultiples([1, 5, 5.0, 10, 1, 30, 10, 625])).toBe(685);
    expect(sumMultiples([1.00])).toBe(0);
  });

  test("it throws an exception if arr argument not passed to function or is not an array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");

    expect(() => {
      sumMultiples("foo");
    }).toThrow("an Array is required");

    expect(() => {
      sumMultiples(1);
    }).toThrow("an Array is required");
  });

  test("it works with negative numbers", () => {
    expect(sumMultiples([1, 3, -5])).toBe(-2);
  });
});

describe("isValidDNA", () => {
  test("it returns false if it is not valid DNA", () => {
    expect(isValidDNA("CGTAP")).toBe(false);
    expect(isValidDNA("AKNYEHD")).toBe(false);
    expect(isValidDNA("JSJHS")).toBe(false);
  });

  test("it returns true if it is valid DNA", () => {
    expect(isValidDNA("CGTA")).toBe(true);
    expect(isValidDNA("ATGC")).toBe(true);
    expect(isValidDNA("A")).toBe(true);
    expect(isValidDNA("T")).toBe(true);
  });

  test("ignores case", () => {
    expect(isValidDNA("CgTA")).toBe(true);
    expect(isValidDNA("ATCcag")).toBe(true);
    expect(isValidDNA("Aa")).toBe(true);
    expect(isValidDNA("TTtt")).toBe(true);
  });

  test("returns false if empty string", () => {
    expect(isValidDNA("")).toBe(false);
  });

  test("it throws an exception if string argument not passed to function or is not an string", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");

    expect(() => {
      isValidDNA(["ATSA"]);
    }).toThrow("an argument type String is required");

    expect(() => {
      isValidDNA(1);
    }).toThrow("an argument type String is required");

    expect(() => {
      isValidDNA(-10088);
    }).toThrow("an argument type String is required");
  });
});

describe("getComplementaryDNA", () => {
  test("it returns the correct complimentary DNA", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("CGTA")).toBe("GCAT");
    expect(getComplementaryDNA("TACG")).toBe("ATGC");
  });

  test("ignores case", () => {
    expect(getComplementaryDNA("AcTG")).toBe("TGAC");
    expect(getComplementaryDNA("CGTa")).toBe("GCAT");
    expect(getComplementaryDNA("TAcG")).toBe("ATGC");
  });

  test("it throws an exception if string argument not passed to function or is not an string", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("str is required");

    expect(() => {
      getComplementaryDNA(["ATSA"]);
    }).toThrow("an argument type String is required");

    expect(() => {
      getComplementaryDNA(1);
    }).toThrow("an argument type String is required");

    expect(() => {
      getComplementaryDNA(-10088);
    }).toThrow("an argument type String is required");

    expect(() => {
      getComplementaryDNA({ "DNA" : "ACTG" });
    }).toThrow("an argument type String is required");
  });
});

describe("isItPrime", () => {
  test("it returns true for prime numbers", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(7919)).toBe(true);
  });
  test("it returns false for non prime numbers", () => {
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(8)).toBe(false);
    expect(isItPrime(9)).toBe(false);
  });
  test("it returns false for numbers less than 1", () => {
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(-4)).toBe(false);
    expect(isItPrime(-8)).toBe(false);
    expect(isItPrime(-98787)).toBe(false);
  });

  test("it throws an exception if n argument not passed to function or is not an number", () => {
    expect(() => {
      isItPrime();
    }).toThrow("n is required");

    expect(() => {
      isItPrime(["ATSA"]);
    }).toThrow("an argument type number is required");

    expect(() => {
      isItPrime(true);
    }).toThrow("an argument type number is required");

    expect(() => {
      isItPrime("ANDY");
    }).toThrow("an argument type number is required");

    expect(() => {
      isItPrime({ "DNA" : "ACTG" });
    }).toThrow("an argument type number is required");
  });
});

describe("createMatrix", () => {
  test("it returns the expected array of n arrays", () => {
    expect(
      createMatrix(3, "foo")
    ).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"]
    ]);
  });
  test("it returns the expected array of n arrays", () => {
    expect(
      createMatrix(2, "andy")
    ).toEqual([
      ["andy", "andy"],
      ["andy", "andy"]
    ]);
  });
  test("it returns an empty array if number is 0", () => {
    expect(
      createMatrix(0, "andy")
    ).toEqual([]);
  });
  test("it throws an exception if n argument not passed to function or is not an number", () => {
    expect(() => {
      createMatrix();
    }).toThrow("n is required");

    expect(() => {
      createMatrix(n = ["ATSA"], fill = "andy");
    }).toThrow("an argument type number is required");

    expect(() => {
      createMatrix(n = true, fill = "andy");
    }).toThrow("an argument type number is required");

    expect(() => {
      createMatrix(n = "ANDY", fill = "andy");
    }).toThrow("an argument type number is required");

    expect(() => {
      createMatrix(n = { "DNA" : "ACTG" }, fill = "andy");
    }).toThrow("an argument type number is required");
  });
  test("it throws an exception if fill argument not passed to function or is not an number", () => {
    expect(() => {
      createMatrix(n = 2);
    }).toThrow("fill is required");

    expect(() => {
      createMatrix(n = 2, fill = ["ATSA"]);
    }).toThrow("an argument type String is required");

    expect(() => {
      createMatrix(n = 2, fill = true);
    }).toThrow("an argument type String is required");

    expect(() => {
      createMatrix(n = 2, fill = 3);
    }).toThrow("an argument type String is required");

    expect(() => {
      createMatrix(n = 2, fill = {"andy" : true });
    }).toThrow("an argument type String is required");
  });
});

describe("areWeCovered", () => {
  test("it returns false if there are no staff at all", () => {
    expect(areWeCovered([], "Sunday")).toBe(false);
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Tuesday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Saturday")).toBe(false);
  });
  test("it returns false if there are staff but < 3 not shceduled to work", () => {
    const staff = [
      { name: "john", rota: ["Monday", "Tuesday"] },
      { name: "paul", rota: ["Monday", "Tuesday"] },
      { name: "andy", rota: ["Monday", "Tuesday"] },
      { name: "gary", rota: ["Monday", "Tuesday"] }
    ];
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
  });
});
