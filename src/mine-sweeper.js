const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  var cases = ([i, j]) => [[i - 1, j - 1], [i - 1, j], [i - 1, j + 1], [i, j - 1], [i, j + 1], [i + 1, j - 1], [i + 1, j], [i + 1, j + 1],];
  var finalMatrix = matrix.map((r) => r.map((_) => 0));

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        var myCase = cases([i, j]);
        for (var l = 0; l < 8; l++) {
          if (myCase[l][0] >= 0 && myCase[l][1] >= 0 && myCase[l][0] < matrix.length && myCase[l][1] < matrix[i].length
          ) {
            finalMatrix[myCase[l][0]][myCase[l][1]]++;
          }
        }
      }
    }
  }

  return finalMatrix;
}

module.exports = {
  minesweeper
};
