const reverseString = function (str) {
  let arraySplit = str.split("");
  arraySplit = arraySplit.reverse();
  return arraySplit.join("");
};

// Do not edit below this line
module.exports = reverseString;
