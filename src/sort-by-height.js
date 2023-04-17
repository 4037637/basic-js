const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // console.log('First arr: ' + arr)
  let minusArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      minusArr.push(i)
      arr.splice(i, 1)
      i--
    } 
  }

  arr.sort(function(a, b) {
    return a - b
  })

  // console.log('-1 indexes: ' + minusArr)
  // console.log('Sorted arr: ' + arr)

  for (let i = 0; i < minusArr.length; i++) {
    arr.splice(minusArr[i] + i, 0, -1)
  }

  // console.log('Final arr:')
  // console.log(arr)

  return arr
}

module.exports = {
  sortByHeight
};
