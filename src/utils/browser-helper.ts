import { browser, protractor } from "protractor";
import { TcElementImpl } from "../tc-element-impl";

export const BrowserHelper = {
  /**
   * opens the given url in the browser
   * @param {String} url
   */
  async open(url) {
    await browser.get(url);
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
  async restart() {
    await browser.restart();
  },

  /**
   * close the browser
   */
  async close() {
    await browser.close();
  },

  /**
   * maximize
   */
  async maximize() {
    await browser.driver.manage().window().maximize();
  },

  /**
   * implicitly wait
   * @param {number} sec
   */
  async implicitlyWait(sec) {
    await browser.manage().timeouts().implicitlyWait(sec);
  },

  /**
   * Sleep
   * @param {number} msec
   */
  async sleep(msec) {
    await browser.sleep(msec);
  },

  /**
   * initialize the browser
   */
  async initialize() {
    await BrowserHelper.restart();
    await BrowserHelper.maximize();
    BrowserHelper.setIgnoreSync(true); // This is set  to false when accessing Non Angular Pages.
  },

  /**
   * Get Title
   */
  async getTitle() {
    return browser.getTitle();
  },

  /**
   * Get Current URL
   */
  async getCurrentUrl() {
    return browser.getCurrentUrl();
  },

  /**
   * Get All Window Handles
   */
  async getAllWindowHandles() {
    return browser.getAllWindowHandles();
  },

  /**
   * Switch Window
   * @param {Window} window
   */
  async switchToWindow(window) {
    await browser.switchTo().window(window);
  },

  /**
   * Refresh
   */
  async refresh() {
    await browser.driver.navigate().refresh();
  },

  /**
   * Wait until the element becomes visible
   * @param {TcElementImpl} tcElement
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUnitilVisibilityOf(
    tcElement: TcElementImpl,
    timeout?: number,
    message?: string
  ) {
    const until = protractor.ExpectedConditions;
    const element = tcElement.getElement();
    if (timeout && message) {
      await browser.wait(until.visibilityOf(element), timeout, message);
    } else if (timeout) {
      await browser.wait(until.visibilityOf(element), timeout);
    } else {
      await browser.wait(until.visibilityOf(element));
    }
  },

  /**
   * Wait until the element becomes invisible
   * @param {TcElementImpl} tcElement
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUnitilInVisibilityOf(
    tcElement: TcElementImpl,
    timeout?: number,
    message?: string
  ) {
    const until = protractor.ExpectedConditions;
    const element = tcElement.getElement();
    if (timeout && message) {
      await browser.wait(until.invisibilityOf(element), timeout, message);
    } else if (timeout) {
      await browser.wait(until.invisibilityOf(element), timeout);
    } else {
      await browser.wait(until.invisibilityOf(element));
    }
  },

  /**
   * Wait until the element is present
   * @param {TcElementImpl} tcElement
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUnitilPresenceOf(
    tcElement: TcElementImpl,
    timeout?: number,
    message?: string
  ) {
    const until = protractor.ExpectedConditions;
    const element = tcElement.getElement();
    if (timeout && message) {
      await browser.wait(until.presenceOf(element), timeout, message);
    } else if (timeout) {
      await browser.wait(until.presenceOf(element), timeout);
    } else {
      await browser.wait(until.presenceOf(element));
    }
  },

  /**
   * Wait until the element is clickable
   * @param {TcElementImpl} tcElement
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUnitilClickableOf(
    tcElement: TcElementImpl,
    timeout?: number,
    message?: string
  ) {
    const until = protractor.ExpectedConditions;
    const element = tcElement.getElement();
    if (timeout && message) {
      await browser.wait(until.elementToBeClickable(element), timeout, message);
    } else if (timeout) {
      await browser.wait(until.elementToBeClickable(element), timeout);
    } else {
      await browser.wait(until.elementToBeClickable(element));
    }
  },
};
