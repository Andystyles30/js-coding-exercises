function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase() + '.' + lastName.charAt(0).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let vat = (originalPrice / 100) * vatRate;
  let result = originalPrice + vat;
  if (result % 1 !== 0)
    result = + (result.toFixed(2));
  return result;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let savings = (originalPrice / 100) * reduction;
  let result = +(originalPrice - savings).toFixed(2);
  return result;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let position;
  let length;
  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }
  return str.substring(position, position + length);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let reversedWords = [];
  for (let word in words) {
    reversedWords.push(reverseWord(words[word]));
  }
  return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let linuxCount = 0;
  for (let user in users) {
    if (users[user].type == "Linux") {
      linuxCount++
    }
  }
  return linuxCount;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let meanScore = +(scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2);
  return meanScore;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  var result = n;
  if (n % 3 === 0 && n % 5 === 0) {
    result = "fizzbuzz";
  } else if (n % 3 === 0) {
    result = "fizz";
  } else if (n % 5 === 0) {
    result = "buzz";
  }
  return result;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
