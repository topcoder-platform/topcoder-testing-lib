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
}
