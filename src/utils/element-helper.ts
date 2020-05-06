import {
  by,
  element,
  ElementArrayFinder,
  ElementFinder,
  Locator,
} from "protractor";
import { TcElementImpl } from "../tc-element-impl";

export const ElementHelper = {
  /**
   * Get element by classname
   * @param {string} className
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by classname
   */
  getElementByClassName(
    className: string,
    parentEl?: TcElementImpl
  ): TcElementImpl {
    return new TcElementImpl(
      this.getElement(by.className(className), parentEl)
    );
  },

  /**
   * Get all elements by classname
   * @param {string} className
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by classname
   */
  async getAllElementsByClassName(
    className: string,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(by.className(className), parentEl);
    return this.getElementArray(list);
  },

  /**
   * Get element by css
   * @param {string} css
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by css
   */
  getElementByCss(css, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(this.getElement(by.css(css), parentEl));
  },

  /**
   * Get all elements by css
   * @param {string} cssName
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by css
   */
  async getAllElementsByCss(
    cssName,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(by.css(cssName), parentEl);
    return this.getElementArray(list);
  },

  /**
   * Get element by id
   * @param {string} id
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by id
   */
  getElementById(id, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(this.getElement(by.id(id), parentEl));
  },

  /**
   * Get all elements by id
   * @param {string} id
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by id
   */
  async getAllElementsById(
    id,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(by.id(id), parentEl);
    return this.getElementArray(list);
  },

  /**
   * Get element by javascript
   * @param {string|Function} js
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by js
   */
  getElementByJs(js, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(this.getElement(by.js(js), parentEl));
  },

  /**
   * Get all elements by js
   * @param {string} js
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by js
   */
  async getAllElementsByJs(
    js,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(by.js(js), parentEl);
    return this.getElementArray(list);
  },

  /**
   * Get element by name
   * @param {string} name
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by name
   */
  getElementByName(name, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(this.getElement(by.name(name), parentEl));
  },

  /**
   * Get all elements by name
   * @param {string} name
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by name
   */
  async getAllElementsByName(
    name,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(by.name(name), parentEl);
    return this.getElementArray(list);
  },

  /**
   * Get element by anchor element text
   * @param {string} text
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by link text
   */
  getElementByLinkText(text, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(this.getElement(by.linkText(text), parentEl));
  },

  /**
   * Get all elements by link text
   * @param {string} text
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by link text
   */
  async getAllElementsByLinkText(
    text,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(by.linkText(text), parentEl);
    return this.getElementArray(list);
  },

  /**
   * Get element by partial anchor element text
   * @param {string} text
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by partial link text
   */
  getElementByPartialLinkText(text, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(
      this.getElement(by.partialLinkText(text), parentEl)
    );
  },

  /**
   * Get all elements by partial link text
   * @param {string} text
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by partial link text
   */
  async getAllElementsByPartialLinkText(
    text,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(by.partialLinkText(text), parentEl);
    return this.getElementArray(list);
  },

  /**
   * Get element by html tag
   * @param {string} tag
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by html tag
   */
  getElementByTag(tag, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(this.getElement(by.tagName(tag), parentEl));
  },

  /**
   * Get all elements by html tag
   * @param {string} tag
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by html tag
   */
  async getAllElementsByTag(
    tag,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(by.tagName(tag), parentEl);
    return this.getElementArray(list);
  },

  /**
   * Get element by binding
   * @param {string} binding
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by binding
   */
  getElementByBinding(binding, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(this.getElement(by.binding(binding), parentEl));
  },

  /**
   * Get all elements by binding
   * @param {string} binding
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by binding
   */
  async getAllElementsByBinding(
    binding,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(by.binding(binding), parentEl);
    return this.getElementArray(list);
  },

  /**
   * Get element by exact binding
   * @param {string} binding
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by exact binding
   */
  getElementByExactBinding(binding, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(
      this.getElement(by.exactBinding(binding), parentEl)
    );
  },

  /**
   * Get all elements by exact binding
   * @param {string} binding
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by exact binding
   */
  async getAllElementsByExactBinding(
    binding,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(by.exactBinding(binding), parentEl);
    return this.getElementArray(list);
  },

  /**
   * Get element by model
   * @param {string} model
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by model
   */
  getElementByModel(model, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(this.getElement(by.model(model), parentEl));
  },

  /**
   * Get all elements by model
   * @param {string} model
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by model
   */
  async getAllElementsByModel(
    model,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(by.model(model), parentEl);
    return this.getElementArray(list);
  },

  /**
   * Get element by button text
   * @param {string} text
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by button text
   */
  getElementByButtonText(text, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(this.getElement(by.buttonText(text), parentEl));
  },

  /**
   * Get all elements by button text
   * @param {string} text
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by button text
   */
  async getAllElementsByButtonText(
    text,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(by.buttonText(text), parentEl);
    return this.getElementArray(list);
  },

  /**
   * Get element by button containing substring
   * @param {string} text
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by partial button text
   */
  getElementByPartialButtonText(text, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(
      this.getElement(by.partialButtonText(text), parentEl)
    );
  },

  /**
   * Get all elements by partial button text
   * @param {string} text
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by partial button text
   */
  async getAllElementsByPartialButtonText(
    text,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(
      by.partialButtonText(text),
      parentEl
    );
    return this.getElementArray(list);
  },

  /**
   * Get element by repeater
   * @param {string} repeater
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by repeater
   */
  getElementByRepeater(repeater, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(this.getElement(by.repeater(repeater), parentEl));
  },

  /**
   * Get all elements by repeater
   * @param {string} repeater
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by repeater
   */
  async getAllElementsByRepeater(
    repeater,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(by.repeater(repeater), parentEl);
    return this.getElementArray(list);
  },

  /**
   * Get element by exact repeater
   * @param {string} repeater
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by exact repeater
   */
  getElementByExactRepeater(repeater, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(
      this.getElement(by.exactRepeater(repeater), parentEl)
    );
  },

  /**
   * Get all elements by exact repeater
   * @param {string} repeater
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by exact repeater
   */
  async getAllElementsByExactRepeater(
    repeater,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(
      by.exactRepeater(repeater),
      parentEl
    );
    return this.getElementArray(list);
  },

  /**
   * Get element by css containing text
   * @param {string} cssSelector
   * @param {string} text
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by css selector and text
   */
  getElementByCssContainingText(
    cssSelector,
    text,
    parentEl?: TcElementImpl
  ): TcElementImpl {
    return new TcElementImpl(
      this.getElement(by.cssContainingText(cssSelector, text), parentEl)
    );
  },

  /**
   * Get all elements by css containing text
   * @param {string} cssSelector
   * @param {string} text
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by css selector and text
   */
  async getAllElementsByCssContainingText(
    cssSelector,
    text,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(
      by.cssContainingText(cssSelector, text),
      parentEl
    );
    return this.getElementArray(list);
  },

  /**
   * Get element by options
   * @param {string} options
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by options
   */
  getElementByOptions(options, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(this.getElement(by.options(options), parentEl));
  },

  /**
   * Get all elements by options
   * @param {string} options
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by options
   */
  async getAllElementsByOptions(
    options,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(by.options(options), parentEl);
    return this.getElementArray(list);
  },

  /**
   * Get element by deep css
   * @param {string} deepCss
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by deep css
   */
  getElementByDeepCss(deepCss, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(this.getElement(by.deepCss(deepCss), parentEl));
  },

  /**
   * Get all elements by deep css
   * @param {string} deepCss
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by deep css
   */
  async getAllElementsByDeepCss(
    deepCss,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(by.deepCss(deepCss), parentEl);
    return this.getElementArray(list);
  },

  /**
   * Get element by xPath
   * @param {string} xPath
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by xpath
   */
  getElementByXPath(xPath, parentEl?: TcElementImpl): TcElementImpl {
    return new TcElementImpl(this.getElement(by.xpath(xPath), parentEl));
  },

  /**
   * Get all elements by xPath
   * @param {string} xPath
   * @param {TcElementImpl} parentEl
   * @returns {Promise<TcElementImpl[]>} the resolved elements by xpath
   */
  async getAllElementsByXPath(
    xPath,
    parentEl?: TcElementImpl
  ): Promise<TcElementImpl[]> {
    const list = await this.getAllElements(by.xpath(xPath), parentEl);
    return this.getElementArray(list);
  },

  /**
   * Get element containing text
   * @param {string} text
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element containing text
   */
  getElementContainingText(text, parentEl?: TcElementImpl): TcElementImpl {
    const xPath = `//*[contains(text(),"${text}")]`;
    return this.getElementByXPath(xPath, parentEl);
  },

  /**
   * Get html tag element containing text
   * @param {string} tag
   * @param {string} text
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element containing text
   */
  getTagElementContainingText(
    tag,
    text,
    parentEl?: TcElementImpl
  ): TcElementImpl {
    const xPath = `//${tag}[contains(text(),"${text}")]`;
    return this.getElementByXPath(xPath, parentEl);
  },

  /**
   * Get input element by type
   * @param {string} type
   * @param {TcElementImpl} parentEl
   * @returns {TcElementImpl} the resolved element by type
   */
  getInputElementByType(type, parentEl?: TcElementImpl): TcElementImpl {
    const xPath = `//input[@type="${type}"]`;
    return this.getElementByXPath(xPath, parentEl);
  },

  /**
   * Get TcElement Array
   * @param {ElementArrayFinder} elementArray
   * @returns {TcElementImpl[]} the resolved elements as array
   */
  getElementArray(elementArray: ElementArrayFinder): TcElementImpl[] {
    const tcElementArray: TcElementImpl[] = [];

    for (let i = 0; i < elementArray.length; i++) {
      tcElementArray[i] = new TcElementImpl(elementArray[i]);
    }
    return tcElementArray;
  },

  /**
   * Get element by locator
   * @param {Locator} locator
   * @param {TcElementImpl} parentEl
   */
  getElement(locator: Locator, parentEl?: TcElementImpl) {
    if (parentEl) {
      return parentEl.getElement().element(locator);
    }
    return element(locator);
  },

  /**
   * Get all elements by locator
   * @param {Locator} locator
   * @param {TcElementImpl} parentEl
   */
  async getAllElements(locator: Locator, parentEl?: TcElementImpl) {
    if (parentEl) {
      return parentEl.getElement().all(locator);
    }
    return element.all(locator);
  },
};
