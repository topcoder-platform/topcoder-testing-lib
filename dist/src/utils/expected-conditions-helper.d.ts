import { TcElementImpl } from "../tc-element-impl";
export declare const ExpectedConditionsHelper: {
    /**
     * Return Visibility of the given element expected condition
     * @param {TcElementImpl} tcElement
     */
    getUntilVisibilityOfCondition(tcElement: TcElementImpl): Promise<Function>;
    /**
     * eturn Invisibility of the given element expected condition
     * @param {TcElementImpl} tcElement
     */
    getUntilInvisibilityOfCondition(tcElement: TcElementImpl): Promise<Function>;
    /**
     * Return Visibility of the given element expected condition
     * @param {TcElementImpl} tcElement
     */
    getUntilPresenceOfCondition(tcElement: TcElementImpl): Promise<Function>;
    /**
     * eturn Invisibility of the given element expected condition
     * @param {TcElementImpl} tcElement
     */
    getUntilToBeClickableCondition(tcElement: TcElementImpl): Promise<Function>;
};
