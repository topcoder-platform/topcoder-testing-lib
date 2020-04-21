import { ElementFinder } from "protractor";
import TCElement from "./TCElment";
export declare class TCElementImpl implements TCElement {
    protected elementFinder: ElementFinder;
    private element;
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
     * Get element
     */
    getElement(): ElementFinder;
    /**
     * Set element
     * @param {ElementFinder} elementFinder
     */
    setElement(element: any): void;
}
