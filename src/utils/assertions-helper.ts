import { browser } from "protractor";

export const AssertionsHelper = {
  /**
   * opens the given url in the browser
   * @param {String} value1
   * @param {String} value2
   */
  expectToBeEqual(value1, value2) {
    expect(value1).toEqual(value2);
  },

  /**
   * opens the given url in the browser
   * @param {String} value1
   * @param {String} value2
   */
  expectToBeSame(value1, value2) {
    expect(value1).toBe(value2);
  },
};
