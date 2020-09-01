function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallNums = [];
  nums.forEach(function (number) {
    if (number < 1) 
      smallNums.push(number);
  });
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let namesBeginningWith = [];
  names.forEach(function (name) {
    if (name.charAt(0).toUpperCase() === char) 
      namesBeginningWith.push(name);
  });
  return namesBeginningWith;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbs = [];
  words.forEach(function (word) {
    if (word.substring(0, 3) === "to ")
      verbs.push(word);
  });
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let integers = [];
  nums.forEach(function (num) {
    if (Number.isInteger(num))
      integers.push(num);
  });
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = []
  users.forEach(function (user) {
      cities.push(user.data.city.displayName);
  });
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squareRoots = [];
  let sqrt = 0;
  nums.forEach(function (number) {
    sqrt = Math.sqrt(number);
    if (sqrt % 1 !== 0) 
      sqrt = parseFloat(sqrt.toFixed(2));
    squareRoots.push(sqrt);
  });
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let sentenceContained = [];
  sentences.forEach(function (sentence) {
    if (sentence.toUpperCase().indexOf(str.toUpperCase()) >= 0) {
      sentenceContained.push(sentence);
    }
  });
  return sentenceContained;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSides = [];
  triangles.forEach(function (triangle) {
    longestSides.push(Math.max.apply(null, triangle));
  });
  return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
