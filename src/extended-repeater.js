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

// Main str repeater

function repeater(str, options) {

  var repeatedString = "";

  if (!options.hasOwnProperty('separator')) {
    options.separator = '+'
  }
  if (str === undefined) {
    str = ''
  } else if (typeof str !== 'string') {
    str = str + ''
  }
  if (!options.hasOwnProperty('repeatTimes')) {
    options.repeatTimes = 1
  }

  while (options.repeatTimes > 0) {
    if (options.repeatTimes === 1) {
      repeatedString += str + addRepeater(options.addition, options);
    } else {
      repeatedString += str + addRepeater(options.addition, options) + options.separator;
    }
    options.repeatTimes--;
  }
  return repeatedString;
}

// Addition str repeater

function addRepeater(str, options) {

  var repeatedAddition = "";

  if (!options.hasOwnProperty('additionSeparator')) {
    options.additionSeparator = '|'
  } 
  if (str === undefined) {
    str = ''
  } else if (typeof str !== 'string') {
    str = str + ''
  }
  if (!options.hasOwnProperty('additionRepeatTimes')) {
    options.additionRepeatTimes = 1
  }

  let separ = options.additionSeparator;
  let repeat = options.additionRepeatTimes;

  while (repeat > 0) {
    if (repeat === 1) {
      repeatedAddition += str;
    } else {
      repeatedAddition += str + separ;
    }
    repeat--;
  }
  return repeatedAddition;
}

module.exports = {
  repeater
};
