import { ElementFinder } from "protractor";
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
   */
  public async getText() {
    return this.element.getText();
  }

  /**
   * Checks if Element is Present
   */
  public async isPresent() {
    return this.element.isPresent();
  }

  /**
   * Returns the attribute
   * @param {any} attribute
   */
  public async getAttribute(attribute) {
    return this.element.getAttribute(attribute);
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
