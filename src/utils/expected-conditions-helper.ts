import { protractor } from "protractor";
import { TcElementImpl } from "../tc-element-impl";

export const ExpectedConditionsHelper = {
  /**
   * Return Visibility of the given element expected condition
   * @param {TcElementImpl} tcElement
   */
  async getUntilVisibilityOfCondition(tcElement: TcElementImpl) {
    const until = protractor.ExpectedConditions;
    const element = tcElement.getElement();
    return until.visibilityOf(element);
  },
  /**
   * eturn Invisibility of the given element expected condition
   * @param {TcElementImpl} tcElement
   */
  async getUntilInvisibilityOfCondition(tcElement: TcElementImpl) {
    const until = protractor.ExpectedConditions;
    const element = tcElement.getElement();
    return until.invisibilityOf(element);
  },
  /**
   * Return Visibility of the given element expected condition
   * @param {TcElementImpl} tcElement
   */
  async getUntilPresenceOfCondition(tcElement: TcElementImpl) {
    const until = protractor.ExpectedConditions;
    const element = tcElement.getElement();
    return until.presenceOf(element);
  },
  /**
   * eturn Invisibility of the given element expected condition
   * @param {TcElementImpl} tcElement
   */
  async getUntilToBeClickableCondition(tcElement: TcElementImpl) {
    const until = protractor.ExpectedConditions;
    const element = tcElement.getElement();
    return until.elementToBeClickable(element);
  },
};
