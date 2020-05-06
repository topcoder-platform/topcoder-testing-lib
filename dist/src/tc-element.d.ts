import { ElementFinder, WebElement } from "protractor";
export default interface TcElement {
    element: any;
    sendKeys(text: any): void;
    click(): void;
    clear(): void;
    getText(): any;
    isPresent(): any;
    getElement(): any;
    getAttribute(attribute: any): any;
    setElement(element: any): void;
    evaluate(element: any): any;
    allowAnimations(value: boolean): ElementFinder;
    equals(element: ElementFinder | WebElement): Promise<boolean>;
    getId(): Promise<string>;
    getTagName(): Promise<string>;
    getCssValue(cssStyleProperty: any): Promise<string>;
    getSize(): Promise<any>;
    getLocation(): Promise<any>;
    isEnabled(): Promise<boolean>;
    isSelected(): Promise<boolean>;
    submit(): Promise<void>;
    isDisplayed(): Promise<boolean>;
    takeScreenshot(optScroll: boolean): Promise<string>;
}
