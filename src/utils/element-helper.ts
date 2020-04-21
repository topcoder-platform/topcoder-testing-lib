import { by, element, ElementArrayFinder } from "protractor";
import { TCElementImpl } from "../TCElementImpl";

export const ElementHelper = {
  /**
   * Get element by classname
   * @param {String} className
   */
  getElementByClassName(className) {
    return new TCElementImpl(element(by.className(className)));
  },

  /**
   * Get all elements by classname
   * @param {String} className
   */
  async getAllElementsByClassName(className) {
    const list = await element.all(by.className(className));
    return this.getElementArray(list);
  },

  /**
   * Get all elements by css
   * @param {String} className
   */
  async getAllElementsByCss(cssName) {
    const list = await element.all(by.css(cssName));
    return this.getElementArray(list);
  },

  /**
   * Get element by css
   * @param {String} css
   */
  getElementByCss(css) {
    return new TCElementImpl(element(by.css(css)));
  },

  /**
   * Get element by id
   * @param {String} id
   */
  getElementById(id) {
    return new TCElementImpl(element(by.id(id)));
  },

  /**
   * Get element by javascript
   * @param {String|Function} js
   */
  getElementByJs(js) {
    return new TCElementImpl(element(by.js(js)));
  },

  /**
   * Get element by name
   * @param {String} name
   */
  getElementByName(name) {
    return new TCElementImpl(element(by.name(name)));
  },

  /**
   * Get element by partial anchor element text
   * @param {String} text
   */
  getElementByPartialLinkText(text) {
    return new TCElementImpl(element(by.partialLinkText(text)));
  },

  /**
   * Get element by html tag
   * @param {String} tag
   */
  getElementsByTag(tag) {
    return new TCElementImpl(element(by.tagName(tag)));
  },

  /**
   * Get element by binding
   * @param {String} binding
   */
  getElementByBinding(binding) {
    return new TCElementImpl(element(by.binding(binding)));
  },

  /**
   * Get element by exact binding
   * @param {String} binding
   */
  getElementByExactBinding(binding) {
    return new TCElementImpl(element(by.exactBinding(binding)));
  },

  /**
   * Get element by model
   * @param {String} model
   */
  getElementByModel(model) {
    return new TCElementImpl(element(by.model(model)));
  },

  /**
   * Get element by button containing substring
   * @param {String} text
   */
  getElementByPartialButtonText(text) {
    return new TCElementImpl(element(by.partialButtonText(text)));
  },

  /**
   * Get element by repeater
   * @param {String} repeater
   */
  getElementByRepeater(repeater) {
    return new TCElementImpl(element(by.repeater(repeater)));
  },

  /**
   * Get element by exact repeater
   * @param {String} repeater
   */
  getElementByExactRepeater(repeater) {
    return new TCElementImpl(element(by.exactRepeater(repeater)));
  },

  /**
   * Get element by css containing text
   * @param {String} cssSelector
   * @param {String} text
   */
  getElementByCssContainingText(cssSelector, text) {
    return new TCElementImpl(element(by.cssContainingText(cssSelector, text)));
  },
  /**
   * Get element by options
   * @param {String} options
   */
  getElementByOptions(options) {
    return new TCElementImpl(element(by.options(options)));
  },

  /**
   * Get element by deep css
   * @param {String} deepCss
   */
  getElementByDeepCss(deepCss) {
    return new TCElementImpl(element(by.deepCss(deepCss)));
  },

  /**
   * Get element by xPath
   * @param {String} xPath
   */
  getElementByXPath(xPath) {
    return new TCElementImpl(element(by.xpath(xPath)));
  },

  /**
   * Get element containing text
   * @param {String} text
   */
  getElementContainingText(text) {
    const xPath = `//*[contains(text(),"${text}")]`;
    return this.getElementByXPath(xPath);
  },

  /**
   * Get html tag element containing text
   * @param {String} tag
   * @param {String} text
   */
  getTagElementContainingText(tag, text) {
    const xPath = `//${tag}[contains(text(),"${text}")]`;
    return this.getElementByXPath(xPath);
  },

  /**
   * Get input element by type
   * @param {String} type
   */
  getInputElementByType(type) {
    const xPath = `//input[@type="${type}"]`;
    return this.getElementByXPath(xPath);
  },

  /**
   * Get input element by type
   * @param {String} type
   */
  getElementArray(elementArray: ElementArrayFinder) {
    const tcElementArray: TCElementImpl[] = [];

    for (let i = 0; i < elementArray.length; i++) {
      tcElementArray[i] = elementArray[i];
    }
    return tcElementArray;
  },
};
