const fibonacci = function (numArg) {
  // checks argument's type and makes sure we use
  // a number throughout rest of function.
  let num;
  if (typeof numArg !== "number") {
    num = parseInt(numArg);
  } else {
    num = numArg;
  }

  if (num < 0) return "OOPS";
  if (num == 0) return 0;

  let firstPrev = 1;
  let secondPrev = 0;

  for (let i = 2; i <= num; i++) {
    let current = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = current;
  }

  return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
