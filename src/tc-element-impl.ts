import { ElementFinder, WebElement } from "protractor";
import TcElement from "./tc-element";

export class TcElementImpl implements TcElement {
  public element: ElementFinder;

  /**
   * Constructor
   * @param {ElementFinder} elementFinder
   */
  constructor(protected elementFinder: ElementFinder) {
    this.element = elementFinder;
  }

  /**
   * Send Keys
   * @param {Any} value
   */
  public async sendKeys(value) {
    await this.element.sendKeys(value);
  }

  /**
   * Click element
   */
  public async click() {
    await this.element.click();
  }

  /**
   * Clear element
   */
  public async clear() {
    await this.element.clear();
  }

  /**
   * Get text of Element
   * @returns {Promise.<string>} A promise that will be
   * resolved with the element's visible text.
   */
  public async getText(): Promise<string> {
    return this.element.getText();
  }

  /**
   * Checks if Element is Present
   * @returns {Promise<boolean>} which resolves to whether
   * the element is present on the page.
   */
  public async isPresent(): Promise<boolean> {
    return this.element.isPresent();
  }

  /**
   * Returns the attribute
   * @param {any} attribute
   * @returns {Promise<string>} A promise that will be
   * resolved with the attribute's value. The returned value will always be
   * either a string or null.
   */
  public async getAttribute(attribute): Promise<string> {
    return this.element.getAttribute(attribute);
  }

  /**
   * Get element
   * @returns {ElementFinder}
   */
  public getElement(): ElementFinder {
    return this.element;
  }

  /**
   * Set element
   * @param {ElementFinder} elementFinder
   */
  public setElement(element) {
    this.element = element;
  }

  /**
   * Evaluates the input as if
   * it were on the scope of the current element.
   * @param {string} expression
   * @returns {ElementFinder} - which resolves to the evaluated expression.
   */
  public evaluate(expression): ElementFinder {
    return this.element.evaluate(expression);
  }

  /**
   * Determine if animation is allowed
   * on the current underlying elements.
   * @param {boolean} value
   * @returns {ElementFinder} which resolves
   * to whether animation is allowed.
   */
  public allowAnimations(value: boolean): ElementFinder {
    return this.element.allowAnimations(value);
  }

  /**
   * Compares an element to this one for equality.
   * @param {ElementFinder|!webdriver.WebElement} element
   * @returns {Promise<boolean>} A promise that will be
   * resolved to whether the two WebElements are equal.
   */
  public async equals(element: ElementFinder | WebElement): Promise<boolean> {
    return this.element.equals(element);
  }

  /**
   * Gets the WebDriver ID string representation for this web element.
   * @returns {Promise<string>} A promise that resolves to
   * this element's JSON representation as defined by the WebDriver wire protocol.
   */
  public async getId(): Promise<string> {
    return this.element.getId();
  }

  /**
   * Gets the tag/node name of this element.
   * @returns {Promise<string>} A promise that will be
   * resolved with the element's tag name.
   */
  public async getTagName(): Promise<string> {
    return this.element.getTagName();
  }

  /**
   * Gets the value of the css style
   * @param cssStyleProperty - style property
   * @returns {Promise<string>} A promise that will be resolved
   * with the elements css style property value
   */
  public async getCssValue(cssStyleProperty): Promise<string> {
    return this.element.getCssValue(cssStyleProperty);
  }

  /**
   * Gets the size of this element
   * @returns {Promise<Object>}  A promise that will be resolve
   * with the element's size as a
   * {@code {width:number, height:number}} object.
   */
  public async getSize(): Promise<any> {
    return this.element.getSize();
  }

  /**
   * Gets the location of this element in page space.
   * @return {Promise<{x: number, y: number}>} A promise that
   * will be resolved to the element's location as a
   * {@code {x:number, y:number}} object.
   */
  public async getLocation(): Promise<any> {
    return this.element.getLocation();
  }

  /**
   * Query whether the DOM element represented by this
   * instance is enabled, as dictated by the {@code disabled} attribute.
   * @returns {Promise<boolean>} A promise that will be
   * resolved with whether this element is currently enabled.
   */
  public async isEnabled(): Promise<boolean> {
    return this.element.isEnabled();
  }

  /**
   * Query whether this element is selected.
   * @returns {Promise<boolean>} A promise that will be
   * resolved with whether this element is currently selected.
   */
  public async isSelected(): Promise<boolean> {
    return this.element.isSelected();
  }

  /**
   * Submits the form
   * @returns {Promise<void>} A promise that will be resolved
   * when the form has been submitted.
   */
  public async submit(): Promise<void> {
    await this.element.submit();
  }

  /**
   * Test whether this element is currently displayed.
   * @return {!Promise<boolean>} A promise that will be
   * resolved with whether this element is currently visible on the page.
   */
  public async isDisplayed(): Promise<boolean> {
    return this.element.isDisplayed();
  }

  /**
   * Take a screenshot of the visible region encompassed by this element's
   * bounding rectangle.
   *
   * @param {boolean=} opt_scroll Optional argument that indicates whether the
   * element should be scrolled into view before taking a screenshot.
   * Defaults to false.
   * @returns {Promise<string>} A promise that will be
   * resolved to the screenshot as a base-64 encoded PNG.
   */
  public async takeScreenshot(optScroll = false): Promise<string> {
    return this.element.takeScreenshot(optScroll);
  }
}
