import { by, element, ElementArrayFinder } from "protractor";
import { TcElementImpl } from "../tc-element-impl";

export const ElementHelper = {
  /**
   * Get element by classname
   * @param {string} className
   * @param {TcElementImpl} parentEl
   */
  getElementByClassName(className: string, parentEl?: TcElementImpl) {
    if (parentEl) {
      const el = parentEl.getElement();
      return new TcElementImpl(el.element(by.className(className)));
    }
    return new TcElementImpl(element(by.className(className)));
  },

  /**
   * Get all elements by classname
   * @param {string} className
   */
  async getAllElementsByClassName(className) {
    const list = await element.all(by.className(className));
    return this.getElementArray(list);
  },

  /**
   * Get all elements by css
   * @param {string} className
   */
  async getAllElementsByCss(cssName) {
    const list = await element.all(by.css(cssName));
    return this.getElementArray(list);
  },

  /**
   * Get element by css
   * @param {string} css
   */
  getElementByCss(css) {
    return new TcElementImpl(element(by.css(css)));
  },

  /**
   * Get element by id
   * @param {string} id
   */
  getElementById(id) {
    return new TcElementImpl(element(by.id(id)));
  },

  /**
   * Get element by javascript
   * @param {string|Function} js
   */
  getElementByJs(js) {
    return new TcElementImpl(element(by.js(js)));
  },

  /**
   * Get element by name
   * @param {string} name
   */
  getElementByName(name) {
    return new TcElementImpl(element(by.name(name)));
  },

  /**
   * Get element by partial anchor element text
   * @param {string} text
   */
  getElementByPartialLinkText(text) {
    return new TcElementImpl(element(by.partialLinkText(text)));
  },

  /**
   * Get element by html tag
   * @param {string} tag
   */
  getElementsByTag(tag) {
    return new TcElementImpl(element(by.tagName(tag)));
  },

  /**
   * Get element by binding
   * @param {string} binding
   */
  getElementByBinding(binding) {
    return new TcElementImpl(element(by.binding(binding)));
  },

  /**
   * Get element by exact binding
   * @param {string} binding
   */
  getElementByExactBinding(binding) {
    return new TcElementImpl(element(by.exactBinding(binding)));
  },

  /**
   * Get element by model
   * @param {string} model
   */
  getElementByModel(model) {
    return new TcElementImpl(element(by.model(model)));
  },

  /**
   * Get element by button containing substring
   * @param {string} text
   */
  getElementByPartialButtonText(text) {
    return new TcElementImpl(element(by.partialButtonText(text)));
  },

  /**
   * Get element by repeater
   * @param {string} repeater
   */
  getElementByRepeater(repeater) {
    return new TcElementImpl(element(by.repeater(repeater)));
  },

  /**
   * Get element by exact repeater
   * @param {string} repeater
   */
  getElementByExactRepeater(repeater) {
    return new TcElementImpl(element(by.exactRepeater(repeater)));
  },

  /**
   * Get element by css containing text
   * @param {string} cssSelector
   * @param {string} text
   */
  getElementByCssContainingText(cssSelector, text) {
    return new TcElementImpl(element(by.cssContainingText(cssSelector, text)));
  },
  /**
   * Get element by options
   * @param {string} options
   */
  getElementByOptions(options) {
    return new TcElementImpl(element(by.options(options)));
  },

  /**
   * Get element by deep css
   * @param {string} deepCss
   */
  getElementByDeepCss(deepCss) {
    return new TcElementImpl(element(by.deepCss(deepCss)));
  },

  /**
   * Get element by xPath
   * @param {string} xPath
   */
  getElementByXPath(xPath) {
    return new TcElementImpl(element(by.xpath(xPath)));
  },

  /**
   * Get element containing text
   * @param {string} text
   */
  getElementContainingText(text) {
    const xPath = `//*[contains(text(),"${text}")]`;
    return this.getElementByXPath(xPath);
  },

  /**
   * Get html tag element containing text
   * @param {string} tag
   * @param {string} text
   */
  getTagElementContainingText(tag, text) {
    const xPath = `//${tag}[contains(text(),"${text}")]`;
    return this.getElementByXPath(xPath);
  },

  /**
   * Get input element by type
   * @param {string} type
   */
  getInputElementByType(type) {
    const xPath = `//input[@type="${type}"]`;
    return this.getElementByXPath(xPath);
  },

  /**
   * Get TcElement Array
   * @param {ElementArrayFinder} elementArray
   */
  getElementArray(elementArray: ElementArrayFinder) {
    const tcElementArray: TcElementImpl[] = [];

    for (let i = 0; i < elementArray.length; i++) {
      tcElementArray[i] = elementArray[i];
    }
    return tcElementArray;
  },
};
