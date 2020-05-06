import { ElementFinder, WebElement } from "protractor";
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
     * Clear element
     */
    clear(): Promise<void>;
    /**
     * Get text of Element
     * @returns {Promise.<string>} A promise that will be
     * resolved with the element's visible text.
     */
    getText(): Promise<string>;
    /**
     * Checks if Element is Present
     * @returns {Promise<boolean>} which resolves to whether
     * the element is present on the page.
     */
    isPresent(): Promise<boolean>;
    /**
     * Returns the attribute
     * @param {any} attribute
     * @returns {Promise<string>} A promise that will be
     * resolved with the attribute's value. The returned value will always be
     * either a string or null.
     */
    getAttribute(attribute: any): Promise<string>;
    /**
     * Get element
     * @returns {ElementFinder}
     */
    getElement(): ElementFinder;
    /**
     * Set element
     * @param {ElementFinder} elementFinder
     */
    setElement(element: any): void;
    /**
     * Evaluates the input as if
     * it were on the scope of the current element.
     * @param {string} expression
     * @returns {ElementFinder} - which resolves to the evaluated expression.
     */
    evaluate(expression: any): ElementFinder;
    /**
     * Determine if animation is allowed
     * on the current underlying elements.
     * @param {boolean} value
     * @returns {ElementFinder} which resolves
     * to whether animation is allowed.
     */
    allowAnimations(value: boolean): ElementFinder;
    /**
     * Compares an element to this one for equality.
     * @param {ElementFinder|!webdriver.WebElement} element
     * @returns {Promise<boolean>} A promise that will be
     * resolved to whether the two WebElements are equal.
     */
    equals(element: ElementFinder | WebElement): Promise<boolean>;
    /**
     * Gets the WebDriver ID string representation for this web element.
     * @returns {Promise<string>} A promise that resolves to
     * this element's JSON representation as defined by the WebDriver wire protocol.
     */
    getId(): Promise<string>;
    /**
     * Gets the tag/node name of this element.
     * @returns {Promise<string>} A promise that will be
     * resolved with the element's tag name.
     */
    getTagName(): Promise<string>;
    /**
     * Gets the value of the css style
     * @param cssStyleProperty - style property
     * @returns {Promise<string>} A promise that will be resolved
     * with the elements css style property value
     */
    getCssValue(cssStyleProperty: any): Promise<string>;
    /**
     * Gets the size of this element
     * @returns {Promise<Object>}  A promise that will be resolve
     * with the element's size as a
     * {@code {width:number, height:number}} object.
     */
    getSize(): Promise<any>;
    /**
     * Gets the location of this element in page space.
     * @return {Promise<{x: number, y: number}>} A promise that
     * will be resolved to the element's location as a
     * {@code {x:number, y:number}} object.
     */
    getLocation(): Promise<any>;
    /**
     * Query whether the DOM element represented by this
     * instance is enabled, as dictated by the {@code disabled} attribute.
     * @returns {Promise<boolean>} A promise that will be
     * resolved with whether this element is currently enabled.
     */
    isEnabled(): Promise<boolean>;
    /**
     * Query whether this element is selected.
     * @returns {Promise<boolean>} A promise that will be
     * resolved with whether this element is currently selected.
     */
    isSelected(): Promise<boolean>;
    /**
     * Submits the form
     * @returns {Promise<void>} A promise that will be resolved
     * when the form has been submitted.
     */
    submit(): Promise<void>;
    /**
     * Test whether this element is currently displayed.
     * @return {!Promise<boolean>} A promise that will be
     * resolved with whether this element is currently visible on the page.
     */
    isDisplayed(): Promise<boolean>;
    /**
     * Take a screenshot of the visible region encompassed by this element's
     * bounding rectangle.
     *
     * @param {boolean=} opt_scroll Optional argument that indicates whether the
     * element should be scrolled into view before taking a screenshot.
     * Defaults to false.
     * @returns {Promise<string>} A promise that will be
     * resolved to the screenshot as a base-64 encoded PNG.
     */
    takeScreenshot(optScroll?: boolean): Promise<string>;
}
