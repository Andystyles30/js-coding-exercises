function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = nums.filter(function (number) {
    if (number < 1) 
      return true;
  });
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const namesBeginningWith = names.filter(function (name) {
    if (name.charAt(0).toUpperCase() === char) 
      return true;
  });
  return namesBeginningWith;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbs = words.filter(function (word) {
    if (word.substring(0, 3) === "to ")
      return true;
  });
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const integers = nums.filter(function (num) {
    if (Number.isInteger(num))
      return true;
  });
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = users.map(function (user) {
      return user.data.city.displayName;
  });
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareRoots = nums.map(function (number) {
    const sqrt = Math.sqrt(number);
    return (sqrt % 1 !== 0) ? parseFloat(sqrt.toFixed(2)): sqrt;
  });
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const sentenceContained = sentences.filter(function (sentence) {
    if (sentence.toUpperCase().indexOf(str.toUpperCase()) >= 0)
      return true;
  });
  return sentenceContained;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestSides = triangles.map(function (triangle) {
    return Math.max.apply(null, triangle);
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
