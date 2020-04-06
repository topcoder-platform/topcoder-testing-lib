import { browser, protractor, ElementFinder } from "protractor";

export const BrowserHelper = {
  /**
   * opens the given url in the browser
   * @param {String} url
   */
  open(url) {
    browser.get(url);
  },

  /**
   * initialize the browser
   */
  initialize() {
    BrowserHelper.restart();
    browser.driver.manage().window().maximize();
    BrowserHelper.setIgnoreSync(true); // This is set  to false when accessing Non Angular Pages.
  },

  /**
   * Set Browser ignoreSynchronization value
   */
  setIgnoreSync(bool: boolean) {
    browser.ignoreSynchronization = bool;
  },

  /**
   * restart the browser
   */
  restart() {
    browser.restart();
  },

  /**
   * Wait until the visibility of the given element
   * @param {ElementFinder} element
   * @param {nember} timeout
   * @param {string} message
   */
  async waitUntilVisibilityOf(
    element: ElementFinder,
    timeout: number,
    message: string
  ) {
    const until = protractor.ExpectedConditions;
    await browser.wait(until.visibilityOf(element), timeout, message);
  },

  /**
   * Wait until the visibility of the given element
   * @param {ElementFinder} element
   * @param {nember} timeout
   * @param {string} message
   */
  async waitUntilInvisibilityOf(
    element: ElementFinder,
    timeout: number,
    message: string
  ) {
    const until = protractor.ExpectedConditions;
    await browser.wait(until.invisibilityOf(element), timeout, message);
  },

  /**
   * Wait until the presence of the given element
   * @param {ElementFinder} element
   * @param {nember} timeout
   * @param {string} message
   */
  async waitUntilPresenceOf(
    element: ElementFinder,
    timeout: number,
    message: string
  ) {
    const until = protractor.ExpectedConditions;
    await browser.wait(until.presenceOf(element), timeout, message);
  },

  /**
   * Wait until the element is clickable
   * @param {ElementFinder} element
   * @param {nember} timeout
   * @param {string} message
   */
  async waitUntilElementToBeClickable(
    element: ElementFinder,
    timeout: number,
    message: string
  ) {
    const until = protractor.ExpectedConditions;
    await browser.wait(until.elementToBeClickable(element), timeout, message);
  },
};
