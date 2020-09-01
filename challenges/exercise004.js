function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallNums = []
  for (let num in nums) {
    if (nums[num] < 1) 
      smallNums.push(nums[num]);
  };
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let namesBeginningWith = []
  for (let name in names) {
    if (names[name].charAt(0).toUpperCase() === char) 
    namesBeginningWith.push(names[name]);
  };
  return namesBeginningWith;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbs = []
  for (let word in words) {
    if (words[word].substring(0, 3) === "to ")
      verbs.push(words[word]);
  };
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let integers = []
  for (let num in nums) {
    if (Number.isInteger(nums[num]))
      integers.push(nums[num]);
  };
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = []
  for (let user in users)
      cities.push(users[user].data.city.displayName);
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squareRoots = [];
  let sqrt = 0;
  for (let num in nums) {
    sqrt = Math.sqrt(nums[num]);
    if (sqrt % 1 !== 0) 
      sqrt = parseFloat(sqrt.toFixed(2));
    squareRoots.push(sqrt);
  }
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let sentenceContained = [];
  for (let sentence in sentences) {
    if (sentences[sentence].toUpperCase().indexOf(str.toUpperCase()) >= 0) {
      sentenceContained.push(sentences[sentence]);
    }
  }
  return sentenceContained;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSides = [];
  for (let triangle in triangles) {
    longestSides.push(Math.max.apply(null, triangles[triangle]));
  }
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
