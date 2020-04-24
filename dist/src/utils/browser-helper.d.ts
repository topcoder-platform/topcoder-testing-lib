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
     * initialize the browser
     */
    initialize(): Promise<void>;
    /**
     * Wait until the expected condition
     * @param {any} condition
     * @param {nember} timeout
     * @param {string} message
     */
    wait(condition: any, timeout: number, message: string): Promise<void>;
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
    switchTo(window: any): Promise<void>;
};
