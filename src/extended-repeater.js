const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.repeatTimes ||= 1;
  options.separator ||= '+';
  if (options.addition === null) options.addition = 'null';
  if (options.addition === undefined) options.addition ||= '';
  options.additionRepeatTimes ||= 1;
  options.additionSeparator ||= '|';
  if (str === null) str = 'null';
  if (str === undefined) str ||= '';
  
  let additionString = `${options.addition}${options.additionSeparator}`.
      repeat(options.additionRepeatTimes - 1) + `${options.addition}`;
  let result = `${str}${additionString}${options.separator}`.
      repeat(options.repeatTimes - 1) + `${str}${additionString}`;
  return result;
}

module.exports = {
  repeater
};
