export default interface TCElement {
  element: any;

  sendKeys(text: any): void;
  click(): void;
  clear(): void;
  getText(): any;
  isPresent(): any;
  getElement(): any;
  setElement(element: any): void;
}
