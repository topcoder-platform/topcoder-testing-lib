import { TcElementImpl } from "../tc-element-impl";
export declare const BrowserHelper: {
    /**
     * opens the given url in the browser
     * @param {String} url
     */
    open(url: any): Promise<void>;
    /**
     * Set Browser ignoreSynchronization value
     */
    setIgnoreSync(bool: boolean): void;
    /**
     * restart the browser
     */
    restart(): Promise<void>;
    /**
     * close the browser
     */
    close(): Promise<void>;
    /**
     * maximize
     */
    maximize(): Promise<void>;
    /**
     * implicitly wait
     * @param {number} sec
     */
    implicitlyWait(sec: any): Promise<void>;
    /**
     * Sleep
     * @param {number} msec
     */
    sleep(msec: any): Promise<void>;
    /**
     * initialize the browser
     */
    initialize(): Promise<void>;
    /**
     * Get Title
     */
    getTitle(): Promise<string>;
    /**
     * Get Current URL
     */
    getCurrentUrl(): Promise<string>;
    /**
     * Get All Window Handles
     */
    getAllWindowHandles(): Promise<string[]>;
    /**
     * Switch Window
     * @param {Window} window
     */
    switchToWindow(window: any): Promise<void>;
    /**
     * Refresh
     */
    refresh(): Promise<void>;
    /**
     * Wait until the element becomes visible
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUnitilVisibilityOf(tcElement: TcElementImpl, timeout?: number, message?: string): Promise<void>;
    /**
     * Wait until the element becomes invisible
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUnitilInVisibilityOf(tcElement: TcElementImpl, timeout?: number, message?: string): Promise<void>;
    /**
     * Wait until the element is present
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUnitilPresenceOf(tcElement: TcElementImpl, timeout?: number, message?: string): Promise<void>;
    /**
     * Wait until the element is clickable
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUnitilClickableOf(tcElement: TcElementImpl, timeout?: number, message?: string): Promise<void>;
};
