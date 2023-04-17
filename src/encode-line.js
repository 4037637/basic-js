const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return ''
  }
  var encode = ''
    var prev, count, i;
    for (count = 1, prev = str[0], i = 1; i < str.length; i++) {
        if (str[i] != prev) {
          if (count > 1) {
            encode += count
          }
            encode += prev
            count = 1;
            prev = str[i];
        }
        else 
            count ++;
    }
    if (count > 1) {
      encode += count
    }
    encode += prev
    return encode;
}

module.exports = {
  encodeLine
};
