import { ElementFinder } from "protractor";
export declare const BrowserHelper: {
    /**
     * opens the given url in the browser
     * @param {String} url
     */
    open(url: any): void;
    /**
     * initialize the browser
     */
    initialize(): void;
    /**
     * Set Browser ignoreSynchronization value
     */
    setIgnoreSync(bool: boolean): void;
    /**
     * restart the browser
     */
    restart(): void;
    /**
     * Wait until the visibility of the given element
     * @param {ElementFinder} element
     * @param {nember} timeout
     * @param {string} message
     */
    waitUntilVisibilityOf(element: ElementFinder, timeout: number, message: string): Promise<void>;
    /**
     * Wait until the visibility of the given element
     * @param {ElementFinder} element
     * @param {nember} timeout
     * @param {string} message
     */
    waitUntilInvisibilityOf(element: ElementFinder, timeout: number, message: string): Promise<void>;
    /**
     * Wait until the presence of the given element
     * @param {ElementFinder} element
     * @param {nember} timeout
     * @param {string} message
     */
    waitUntilPresenceOf(element: ElementFinder, timeout: number, message: string): Promise<void>;
    /**
     * Wait until the element is clickable
     * @param {ElementFinder} element
     * @param {nember} timeout
     * @param {string} message
     */
    waitUntilElementToBeClickable(element: ElementFinder, timeout: number, message: string): Promise<void>;
};
