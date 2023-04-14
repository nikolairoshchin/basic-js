const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = Array.from(n.toString());
  let numbers = [];
  let maximum = 0;
  for(let i = 0; i < arr.length; i++) {
    numbers = arr.map((el) => el);
    numbers.splice(i, 1);
    let num = Number.parseInt(numbers.join(''));
    if (num > maximum) maximum = num;
  }
  return maximum;
}


module.exports = {
  deleteDigit
};
