const { capitalize } = require("./exercise001");

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(number => number * number);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelCased = words[0];
  for (let word in words) {
    if (word > 0) {
      camelCased += capitalize(words[word]);
    }
  }
  return camelCased;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let subjects = 0;
  people.forEach(function (person) {
    subjects += person.subjects.length;
  });
  return subjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let ingredientOnMenu = false;
  for (let item in menu) {
    if (menu[item].ingredients.includes(ingredient)) {
      ingredientOnMenu = true;
    }
  }
  return ingredientOnMenu;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let result = []
  arr1.forEach(number => {
    if (result.indexOf(number) === -1 && arr2.indexOf(number) !== -1)
      result.push(number)
  });
  return result.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
