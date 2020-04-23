import { ElementFinder } from "protractor";
import TCElement from "./TCElment";

export class TCElementImpl implements TCElement {
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
   * Clear
   */
  public async clear() {
    await this.element.clear();
  }

  /**
   * Get text
   */
  public async getText() {
    return this.element.getText();
  }

  /**
   * Is Present
   */
  public async isPresent() {
    return this.element.isPresent();
  }

  /**
   * Get element
   */
  public getElement() {
    return this.element;
  }

  /**
   * Set element
   * @param {ElementFinder} elementFinder
   */
  public setElement(element) {
    this.element = element;
  }
}
