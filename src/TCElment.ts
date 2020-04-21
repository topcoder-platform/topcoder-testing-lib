export default interface TCElement {
  sendKeys: (text) => void;
  click: () => void;
  clear: () => void;
  getText: () => any;
  isPresent: () => any;
  getElement: () => any;
  setElement: (element) => void;
}
