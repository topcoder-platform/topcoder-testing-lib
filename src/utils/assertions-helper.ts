import { browser } from "protractor";

export const AssertionsHelper = {
  /**
   * Expects the value1 to be equal to the value2
   * @param {String} value1
   * @param {String} value2
   * @param {String} value3
   */
  expectToBeEqual(value1, value2, value3 = null) {
    if (value3) {
      expect(value1).toEqual(value2, value3);
    } else {
      expect(value1).toEqual(value2);
    }
  },

  /**
   * Expects the value1 to be same as value2
   * @param {String} value1
   * @param {String} value2
   * @param {String} value3
   */
  expectToBeSame(value1, value2, value3 = null) {
    if (value3) {
      expect(value1).toBe(value2, value3);
    } else {
      expect(value1).toBe(value2);
    }
  },
};
