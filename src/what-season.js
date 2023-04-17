const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

// Date existence

  if (typeof date === 'null' || typeof date === 'undefined') {
    return 'Unable to determine the time of year!'
  }

// Validate check

let checkY = date.getFullYear()
let checkM = date.getMonth()
let checkD = date.getDate()

if (isValidDate(checkY, checkM, checkD) === false) {
  throw new Error('Invalid date!')
}

function isValidDate(Y, M, D) {
  var data = new Date(Y, M, D);
  return Y == data.getFullYear() && M == data.getMonth() && D == data.getDate()
}

if (typeof date !== 'object' || date === new Date()) {
  throw new Error('Invalid date!')
}

// Find season

  let month = date.getMonth()

  let season = ''
  if (month >= 0 && month < 2 || month === 11) {
    season = 'winter'
  } else if (month > 1 && month < 5) {
    season = 'spring'
  } else if (month > 4 && month < 8) {
    season = 'summer'
  } else if (month > 7 && month < 11) {
    season = 'autumn'
  }

  return season
}

module.exports = {
  getSeason
};
