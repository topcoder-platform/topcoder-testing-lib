import { browser, protractor, ProtractorExpectedConditions } from "protractor";
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
   * initialize the browser
   */
  async initialize() {
    await BrowserHelper.restart();
    await BrowserHelper.maximize();
    BrowserHelper.setIgnoreSync(true); // This is set  to false when accessing Non Angular Pages.
  },

  /**
   * Wait until the expected condition
   * @param {any} condition
   * @param {nember} timeout
   * @param {string} message
   */
  async wait(condition: any, timeout: number, message: string) {
    await browser.wait(condition, timeout, message);
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
   * Sleep
   * @param {number} msec
   */
  async sleep(msec) {
    await browser.sleep(msec);
  },
};
