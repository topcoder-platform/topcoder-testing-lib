import { browser, protractor } from "protractor";
import { TCElementImpl } from "../TCElementImpl";

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
   * Wait until the visibility of the given element
   * @param {TCElementImpl} tcElement
   * @param {nember} timeout
   * @param {string} message
   */
  async waitUntilVisibilityOf(
    tcElement: TCElementImpl,
    timeout: number,
    message: string
  ) {
    const until = protractor.ExpectedConditions;
    const element = tcElement.getElement();
    await browser.wait(until.visibilityOf(element), timeout, message);
  },

  /**
   * Wait until the visibility of the given element
   * @param {TCElementImpl} tcElement
   * @param {nember} timeout
   * @param {string} message
   */
  async waitUntilInvisibilityOf(
    tcElement: TCElementImpl,
    timeout: number,
    message: string
  ) {
    const until = protractor.ExpectedConditions;
    const element = tcElement.getElement();
    await browser.wait(until.invisibilityOf(element), timeout, message);
  },

  /**
   * Wait until the presence of the given element
   * @param {TCElementImpl} tcElement
   * @param {nember} timeout
   * @param {string} message
   */
  async waitUntilPresenceOf(
    tcElement: TCElementImpl,
    timeout: number,
    message: string
  ) {
    const until = protractor.ExpectedConditions;
    const element = tcElement.getElement();
    await browser.wait(until.presenceOf(element), timeout, message);
  },

  /**
   * Wait until the element is clickable
   * @param {TCElementImpl} tcElement
   * @param {nember} timeout
   * @param {string} message
   */
  async waitUntilElementToBeClickable(
    tcElement: TCElementImpl,
    timeout: number,
    message: string
  ) {
    const until = protractor.ExpectedConditions;
    const element = tcElement.getElement();
    await browser.wait(until.elementToBeClickable(element), timeout, message);
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
  async switchTo(window) {
    await browser.switchTo().window(window);
  },
};
