'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }

  /** Reference from solution
   * FOREACH
   * For each item in the array do whatever
   * @params element
   */

  /** Reference from solution
   * MAP
   * map method provided callback function and do one for each element in the array, and return a new array with results.
   * @returns new arr[]
   */

  /** Reference from solution
   * FILTER
   * filter doesnt always return, Filter iterate and return if a condition is true and skip when its false
   * @returns updated iterated array []
   */

  /** Reference from solution
   * REDUCE
   * Take in accumulator and current value as arguments
   *
   * @returns the reduced version of the code.
   */


}

module.exports = List;
