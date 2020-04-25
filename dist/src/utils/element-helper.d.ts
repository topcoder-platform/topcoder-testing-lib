import { ElementArrayFinder } from "protractor";
import { TcElementImpl } from "../tc-element-impl";
export declare const ElementHelper: {
    /**
     * Get element by classname
     * @param {string} className
     * @param {TcElement} parentEl
     */
    getElementByClassName(className: string, parentEl?: TcElementImpl): TcElementImpl;
    /**
     * Get all elements by classname
     * @param {string} className
     */
    getAllElementsByClassName(className: any): Promise<any>;
    /**
     * Get all elements by css
     * @param {string} className
     */
    getAllElementsByCss(cssName: any): Promise<any>;
    /**
     * Get element by css
     * @param {string} css
     */
    getElementByCss(css: any): TcElementImpl;
    /**
     * Get element by id
     * @param {string} id
     */
    getElementById(id: any): TcElementImpl;
    /**
     * Get element by javascript
     * @param {string|Function} js
     */
    getElementByJs(js: any): TcElementImpl;
    /**
     * Get element by name
     * @param {string} name
     */
    getElementByName(name: any): TcElementImpl;
    /**
     * Get element by partial anchor element text
     * @param {string} text
     */
    getElementByPartialLinkText(text: any): TcElementImpl;
    /**
     * Get element by html tag
     * @param {string} tag
     */
    getElementsByTag(tag: any): TcElementImpl;
    /**
     * Get element by binding
     * @param {string} binding
     */
    getElementByBinding(binding: any): TcElementImpl;
    /**
     * Get element by exact binding
     * @param {string} binding
     */
    getElementByExactBinding(binding: any): TcElementImpl;
    /**
     * Get element by model
     * @param {string} model
     */
    getElementByModel(model: any): TcElementImpl;
    /**
     * Get element by button containing substring
     * @param {string} text
     */
    getElementByPartialButtonText(text: any): TcElementImpl;
    /**
     * Get element by repeater
     * @param {string} repeater
     */
    getElementByRepeater(repeater: any): TcElementImpl;
    /**
     * Get element by exact repeater
     * @param {string} repeater
     */
    getElementByExactRepeater(repeater: any): TcElementImpl;
    /**
     * Get element by css containing text
     * @param {string} cssSelector
     * @param {string} text
     */
    getElementByCssContainingText(cssSelector: any, text: any): TcElementImpl;
    /**
     * Get element by options
     * @param {string} options
     */
    getElementByOptions(options: any): TcElementImpl;
    /**
     * Get element by deep css
     * @param {string} deepCss
     */
    getElementByDeepCss(deepCss: any): TcElementImpl;
    /**
     * Get element by xPath
     * @param {string} xPath
     */
    getElementByXPath(xPath: any): TcElementImpl;
    /**
     * Get element containing text
     * @param {string} text
     */
    getElementContainingText(text: any): any;
    /**
     * Get html tag element containing text
     * @param {string} tag
     * @param {string} text
     */
    getTagElementContainingText(tag: any, text: any): any;
    /**
     * Get input element by type
     * @param {string} type
     */
    getInputElementByType(type: any): any;
    /**
     * Get TcElement Array
     * @param {ElementArrayFinder} elementArray
     */
    getElementArray(elementArray: ElementArrayFinder): TcElementImpl[];
};
