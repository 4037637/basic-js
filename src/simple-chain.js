const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.chain.push(' ');
    } else if (value === null) {
        this.chain.push('null');
      } 
    
      else {
        this.chain.push(value);
      }
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position - 1 < 0 || position > this.chain.length || this.chain === []) {
      throw new Error("You can't remove incorrect link!")
    } else {
      this.chain.splice(position-1,1);
    return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    return '( ' + this.chain.join(' )~~( ') + ' )';
  },
  chain: [],
};

module.exports = {
  chainMaker
};
