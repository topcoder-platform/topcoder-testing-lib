import { ElementArrayFinder, ElementFinder, Locator } from "protractor";
import { TcElementImpl } from "../tc-element-impl";
export declare const ElementHelper: {
    /**
     * Get element by classname
     * @param {string} className
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by classname
     */
    getElementByClassName(className: string, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by classname
     * @param {string} className
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by classname
     */
    getAllElementsByClassName(className: string, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by css
     * @param {string} css
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by css
     */
    getElementByCss(css: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by css
     * @param {string} cssName
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by css
     */
    getAllElementsByCss(cssName: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by id
     * @param {string} id
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by id
     */
    getElementById(id: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by id
     * @param {string} id
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by id
     */
    getAllElementsById(id: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by javascript
     * @param {string|Function} js
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by js
     */
    getElementByJs(js: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by js
     * @param {string} js
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by js
     */
    getAllElementsByJs(js: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by name
     * @param {string} name
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by name
     */
    getElementByName(name: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by name
     * @param {string} name
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by name
     */
    getAllElementsByName(name: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by anchor element text
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by link text
     */
    getElementByLinkText(text: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by link text
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by link text
     */
    getAllElementsByLinkText(text: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by partial anchor element text
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by partial link text
     */
    getElementByPartialLinkText(text: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by partial link text
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by partial link text
     */
    getAllElementsByPartialLinkText(text: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by html tag
     * @param {string} tag
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by html tag
     */
    getElementByTag(tag: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by html tag
     * @param {string} tag
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by html tag
     */
    getAllElementsByTag(tag: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by binding
     * @param {string} binding
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by binding
     */
    getElementByBinding(binding: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by binding
     * @param {string} binding
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by binding
     */
    getAllElementsByBinding(binding: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by exact binding
     * @param {string} binding
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by exact binding
     */
    getElementByExactBinding(binding: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by exact binding
     * @param {string} binding
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by exact binding
     */
    getAllElementsByExactBinding(binding: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by model
     * @param {string} model
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by model
     */
    getElementByModel(model: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by model
     * @param {string} model
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by model
     */
    getAllElementsByModel(model: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by button text
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by button text
     */
    getElementByButtonText(text: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by button text
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by button text
     */
    getAllElementsByButtonText(text: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by button containing substring
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by partial button text
     */
    getElementByPartialButtonText(text: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by partial button text
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by partial button text
     */
    getAllElementsByPartialButtonText(text: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by repeater
     * @param {string} repeater
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by repeater
     */
    getElementByRepeater(repeater: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by repeater
     * @param {string} repeater
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by repeater
     */
    getAllElementsByRepeater(repeater: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by exact repeater
     * @param {string} repeater
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by exact repeater
     */
    getElementByExactRepeater(repeater: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by exact repeater
     * @param {string} repeater
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by exact repeater
     */
    getAllElementsByExactRepeater(repeater: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by css containing text
     * @param {string} cssSelector
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by css selector and text
     */
    getElementByCssContainingText(cssSelector: any, text: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by css containing text
     * @param {string} cssSelector
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by css selector and text
     */
    getAllElementsByCssContainingText(cssSelector: any, text: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by options
     * @param {string} options
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by options
     */
    getElementByOptions(options: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by options
     * @param {string} options
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by options
     */
    getAllElementsByOptions(options: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by deep css
     * @param {string} deepCss
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by deep css
     */
    getElementByDeepCss(deepCss: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by deep css
     * @param {string} deepCss
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by deep css
     */
    getAllElementsByDeepCss(deepCss: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element by xPath
     * @param {string} xPath
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by xpath
     */
    getElementByXPath(xPath: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by xPath
     * @param {string} xPath
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by xpath
     */
    getAllElementsByXPath(xPath: any, parentEl?: TcElementImpl): Promise<TcElementImpl[]>;
    /**
     * Get element containing text
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element containing text
     */
    getElementContainingText(text: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get html tag element containing text
     * @param {string} tag
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element containing text
     */
    getTagElementContainingText(tag: any, text: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get html tag element matching text
     * @param {string} tag
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element matching text
     */
    getTagElementMatchingText(tag: any, text: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get input element by type
     * @param {string} type
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by type
     */
    getInputElementByType(type: any, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get TcElement Array
     * @param {ElementArrayFinder} elementArray
     * @returns {TcElementImpl[]} the resolved elements as array
     */
    getElementArray(elementArray: ElementArrayFinder): TcElementImpl[];
    /**
     * Get element by locator
     * @param {Locator} locator
     * @param {TcElementImpl} parentEl
     */
    getElement(locator: Locator, parentEl?: TcElementImpl): ElementFinder;
    /**
     * Get all elements by locator
     * @param {Locator} locator
     * @param {TcElementImpl} parentEl
     */
    getAllElements(locator: Locator, parentEl?: TcElementImpl): Promise<any[] | ElementFinder[]>;
};
