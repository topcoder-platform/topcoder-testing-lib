import { ElementArrayFinder } from "protractor";
import { TCElementImpl } from "../TCElementImpl";
export declare const ElementHelper: {
    /**
     * Get element by classname
     * @param {String} className
     */
    getElementByClassName(className: any): TCElementImpl;
    /**
     * Get all elements by classname
     * @param {String} className
     */
    getAllElementsByClassName(className: any): Promise<any>;
    /**
     * Get all elements by css
     * @param {String} className
     */
    getAllElementsByCss(cssName: any): Promise<any>;
    /**
     * Get element by css
     * @param {String} css
     */
    getElementByCss(css: any): TCElementImpl;
    /**
     * Get element by id
     * @param {String} id
     */
    getElementById(id: any): TCElementImpl;
    /**
     * Get element by javascript
     * @param {String|Function} js
     */
    getElementByJs(js: any): TCElementImpl;
    /**
     * Get element by name
     * @param {String} name
     */
    getElementByName(name: any): TCElementImpl;
    /**
     * Get element by partial anchor element text
     * @param {String} text
     */
    getElementByPartialLinkText(text: any): TCElementImpl;
    /**
     * Get element by html tag
     * @param {String} tag
     */
    getElementsByTag(tag: any): TCElementImpl;
    /**
     * Get element by binding
     * @param {String} binding
     */
    getElementByBinding(binding: any): TCElementImpl;
    /**
     * Get element by exact binding
     * @param {String} binding
     */
    getElementByExactBinding(binding: any): TCElementImpl;
    /**
     * Get element by model
     * @param {String} model
     */
    getElementByModel(model: any): TCElementImpl;
    /**
     * Get element by button containing substring
     * @param {String} text
     */
    getElementByPartialButtonText(text: any): TCElementImpl;
    /**
     * Get element by repeater
     * @param {String} repeater
     */
    getElementByRepeater(repeater: any): TCElementImpl;
    /**
     * Get element by exact repeater
     * @param {String} repeater
     */
    getElementByExactRepeater(repeater: any): TCElementImpl;
    /**
     * Get element by css containing text
     * @param {String} cssSelector
     * @param {String} text
     */
    getElementByCssContainingText(cssSelector: any, text: any): TCElementImpl;
    /**
     * Get element by options
     * @param {String} options
     */
    getElementByOptions(options: any): TCElementImpl;
    /**
     * Get element by deep css
     * @param {String} deepCss
     */
    getElementByDeepCss(deepCss: any): TCElementImpl;
    /**
     * Get element by xPath
     * @param {String} xPath
     */
    getElementByXPath(xPath: any): TCElementImpl;
    /**
     * Get element containing text
     * @param {String} text
     */
    getElementContainingText(text: any): any;
    /**
     * Get html tag element containing text
     * @param {String} tag
     * @param {String} text
     */
    getTagElementContainingText(tag: any, text: any): any;
    /**
     * Get input element by type
     * @param {String} type
     */
    getInputElementByType(type: any): any;
    /**
     * Get input element by type
     * @param {String} type
     */
    getElementArray(elementArray: ElementArrayFinder): TCElementImpl[];
};
