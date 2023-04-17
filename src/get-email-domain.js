const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      if (!email.slice(i+1).includes('@')) {
        domain = email.substring(i+1)
        break
      }
    }
  }
  return domain
}

module.exports = {
  getEmailDomain
};
