const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (typeof arr !== 'object' || !Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  } else {
    let myArr = [...arr]
    for (let i = 0; i < myArr.length; i++) {
      if (typeof myArr[i] === 'string') {
        // Discard
        if (myArr[i] === '--discard-next') {
          if (i === myArr.length - 1) { myArr.splice(i, 1) } 
          else if (myArr[i + 2] === '--discard-prev' || myArr[i + 2] === '--double-prev') {myArr.splice(i, 3)}
          else { myArr.splice(i, 2) }
        }
        if (myArr[i] === '--discard-prev') {
          if (i === 0) { myArr.splice(i, 1) } 
          else { myArr.splice(i - 1, 2) }
        }
        // Double
        if (myArr[i] === '--double-next') {
          if (i === myArr.length - 1) { myArr.splice(i, 1) }
          else { myArr[i] = myArr[i + 1] }
        }
        if (myArr[i] === '--double-prev') {
          if (i === 0) { myArr.splice(i, 1) } 
          else { myArr[i] = myArr[i - 1] }
        }
      }
    }

    return myArr
  }
}

module.exports = {
  transform
};
