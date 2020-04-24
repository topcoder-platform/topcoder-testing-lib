import { ElementFinder } from "protractor";
import TcElement from "./tc-element";
export declare class TcElementImpl implements TcElement {
    protected elementFinder: ElementFinder;
    element: ElementFinder;
    /**
     * Constructor
     * @param {ElementFinder} elementFinder
     */
    constructor(elementFinder: ElementFinder);
    /**
     * Send Keys
     * @param {Any} value
     */
    sendKeys(value: any): Promise<void>;
    /**
     * Click element
     */
    click(): Promise<void>;
    /**
     * Clear
     */
    clear(): Promise<void>;
    /**
     * Get text
     */
    getText(): Promise<string>;
    /**
     * Is Present
     */
    isPresent(): Promise<boolean>;
    /**
     * Returns the attribute
     */
    getAttribute(attribute: any): Promise<string>;
    /**
     * Get element
     */
    getElement(): ElementFinder;
    /**
     * Set element
     * @param {ElementFinder} elementFinder
     */
    setElement(element: any): void;
}
