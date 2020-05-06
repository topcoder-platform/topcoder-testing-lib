"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var TcElementImpl = /** @class */ (function () {
    /**
     * Constructor
     * @param {ElementFinder} elementFinder
     */
    function TcElementImpl(elementFinder) {
        this.elementFinder = elementFinder;
        this.element = elementFinder;
    }
    /**
     * Send Keys
     * @param {Any} value
     */
    TcElementImpl.prototype.sendKeys = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.element.sendKeys(value)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Click element
     */
    TcElementImpl.prototype.click = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.element.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Clear element
     */
    TcElementImpl.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.element.clear()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get text of Element
     * @returns {Promise.<string>} A promise that will be
     * resolved with the element's visible text.
     */
    TcElementImpl.prototype.getText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.getText()];
            });
        });
    };
    /**
     * Checks if Element is Present
     * @returns {Promise<boolean>} which resolves to whether
     * the element is present on the page.
     */
    TcElementImpl.prototype.isPresent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.isPresent()];
            });
        });
    };
    /**
     * Returns the attribute
     * @param {any} attribute
     * @returns {Promise<string>} A promise that will be
     * resolved with the attribute's value. The returned value will always be
     * either a string or null.
     */
    TcElementImpl.prototype.getAttribute = function (attribute) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.getAttribute(attribute)];
            });
        });
    };
    /**
     * Get element
     * @returns {ElementFinder}
     */
    TcElementImpl.prototype.getElement = function () {
        return this.element;
    };
    /**
     * Set element
     * @param {ElementFinder} elementFinder
     */
    TcElementImpl.prototype.setElement = function (element) {
        this.element = element;
    };
    /**
     * Evaluates the input as if
     * it were on the scope of the current element.
     * @param {string} expression
     * @returns {ElementFinder} - which resolves to the evaluated expression.
     */
    TcElementImpl.prototype.evaluate = function (expression) {
        return this.element.evaluate(expression);
    };
    /**
     * Determine if animation is allowed
     * on the current underlying elements.
     * @param {boolean} value
     * @returns {ElementFinder} which resolves
     * to whether animation is allowed.
     */
    TcElementImpl.prototype.allowAnimations = function (value) {
        return this.element.allowAnimations(value);
    };
    /**
     * Compares an element to this one for equality.
     * @param {ElementFinder|!webdriver.WebElement} element
     * @returns {Promise<boolean>} A promise that will be
     * resolved to whether the two WebElements are equal.
     */
    TcElementImpl.prototype.equals = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.equals(element)];
            });
        });
    };
    /**
     * Gets the WebDriver ID string representation for this web element.
     * @returns {Promise<string>} A promise that resolves to
     * this element's JSON representation as defined by the WebDriver wire protocol.
     */
    TcElementImpl.prototype.getId = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.getId()];
            });
        });
    };
    /**
     * Gets the tag/node name of this element.
     * @returns {Promise<string>} A promise that will be
     * resolved with the element's tag name.
     */
    TcElementImpl.prototype.getTagName = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.getTagName()];
            });
        });
    };
    /**
     * Gets the value of the css style
     * @param cssStyleProperty - style property
     * @returns {Promise<string>} A promise that will be resolved
     * with the elements css style property value
     */
    TcElementImpl.prototype.getCssValue = function (cssStyleProperty) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.getCssValue(cssStyleProperty)];
            });
        });
    };
    /**
     * Gets the size of this element
     * @returns {Promise<Object>}  A promise that will be resolve
     * with the element's size as a
     * {@code {width:number, height:number}} object.
     */
    TcElementImpl.prototype.getSize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.getSize()];
            });
        });
    };
    /**
     * Gets the location of this element in page space.
     * @return {Promise<{x: number, y: number}>} A promise that
     * will be resolved to the element's location as a
     * {@code {x:number, y:number}} object.
     */
    TcElementImpl.prototype.getLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.getLocation()];
            });
        });
    };
    /**
     * Query whether the DOM element represented by this
     * instance is enabled, as dictated by the {@code disabled} attribute.
     * @returns {Promise<boolean>} A promise that will be
     * resolved with whether this element is currently enabled.
     */
    TcElementImpl.prototype.isEnabled = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.isEnabled()];
            });
        });
    };
    /**
     * Query whether this element is selected.
     * @returns {Promise<boolean>} A promise that will be
     * resolved with whether this element is currently selected.
     */
    TcElementImpl.prototype.isSelected = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.isSelected()];
            });
        });
    };
    /**
     * Submits the form
     * @returns {Promise<void>} A promise that will be resolved
     * when the form has been submitted.
     */
    TcElementImpl.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.element.submit()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Test whether this element is currently displayed.
     * @return {!Promise<boolean>} A promise that will be
     * resolved with whether this element is currently visible on the page.
     */
    TcElementImpl.prototype.isDisplayed = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.isDisplayed()];
            });
        });
    };
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
    TcElementImpl.prototype.takeScreenshot = function (optScroll) {
        if (optScroll === void 0) { optScroll = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.takeScreenshot(optScroll)];
            });
        });
    };
    return TcElementImpl;
}());
exports.TcElementImpl = TcElementImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGMtZWxlbWVudC1pbXBsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RjLWVsZW1lbnQtaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7SUFHRTs7O09BR0c7SUFDSCx1QkFBc0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNVLGdDQUFRLEdBQXJCLFVBQXNCLEtBQUs7Ozs7NEJBQ3pCLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQzs7Ozs7S0FDcEM7SUFFRDs7T0FFRztJQUNVLDZCQUFLLEdBQWxCOzs7OzRCQUNFLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUExQixTQUEwQixDQUFDOzs7OztLQUM1QjtJQUVEOztPQUVHO0lBQ1UsNkJBQUssR0FBbEI7Ozs7NEJBQ0UscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQTFCLFNBQTBCLENBQUM7Ozs7O0tBQzVCO0lBRUQ7Ozs7T0FJRztJQUNVLCtCQUFPLEdBQXBCOzs7Z0JBQ0Usc0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBQzs7O0tBQy9CO0lBRUQ7Ozs7T0FJRztJQUNVLGlDQUFTLEdBQXRCOzs7Z0JBQ0Usc0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBQzs7O0tBQ2pDO0lBRUQ7Ozs7OztPQU1HO0lBQ1Usb0NBQVksR0FBekIsVUFBMEIsU0FBUzs7O2dCQUNqQyxzQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBQzs7O0tBQzdDO0lB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