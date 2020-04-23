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
var protractor_1 = require("protractor");
exports.BrowserHelper = {
    /**
     * opens the given url in the browser
     * @param {String} url
     */
    open: function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.get(url)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Set Browser ignoreSynchronization value
     */
    setIgnoreSync: function (bool) {
        protractor_1.browser.ignoreSynchronization = bool;
    },
    /**
     * restart the browser
     */
    restart: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.restart()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * close the browser
     */
    close: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.close()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * maximize
     */
    maximize: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.driver.manage().window().maximize()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * implicitly wait
     * @param {number} sec
     */
    implicitlyWait: function (sec) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.manage().timeouts().implicitlyWait(sec)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * initialize the browser
     */
    initialize: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.BrowserHelper.restart()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, exports.BrowserHelper.maximize()];
                    case 2:
                        _a.sent();
                        exports.BrowserHelper.setIgnoreSync(true); // This is set  to false when accessing Non Angular Pages.
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the visibility of the given element
     * @param {TCElementImpl} tcElement
     * @param {nember} timeout
     * @param {string} message
     */
    waitUntilVisibilityOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            var until, element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        element = tcElement.getElement();
                        return [4 /*yield*/, protractor_1.browser.wait(until.visibilityOf(element), timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the visibility of the given element
     * @param {TCElementImpl} tcElement
     * @param {nember} timeout
     * @param {string} message
     */
    waitUntilInvisibilityOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            var until, element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        element = tcElement.getElement();
                        return [4 /*yield*/, protractor_1.browser.wait(until.invisibilityOf(element), timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the presence of the given element
     * @param {TCElementImpl} tcElement
     * @param {nember} timeout
     * @param {string} message
     */
    waitUntilPresenceOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            var until, element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        element = tcElement.getElement();
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(element), timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the element is clickable
     * @param {TCElementImpl} tcElement
     * @param {nember} timeout
     * @param {string} message
     */
    waitUntilElementToBeClickable: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            var until, element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        element = tcElement.getElement();
                        return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(element), timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Get Title
     */
    getTitle: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, protractor_1.browser.getTitle()];
            });
        });
    },
    /**
     * Get Current URL
     */
    getCurrentUrl: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, protractor_1.browser.getCurrentUrl()];
            });
        });
    },
    /**
     * Get All Window Handles
     */
    getAllWindowHandles: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, protractor_1.browser.getAllWindowHandles()];
            });
        });
    },
    /**
     * Switch Window
     * @param {Window} window
     */
    switchTo: function (window) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.switchTo().window(window)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvYnJvd3Nlci1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFnRTtBQUduRCxRQUFBLGFBQWEsR0FBRztJQUMzQjs7O09BR0c7SUFDRyxJQUFJLFlBQUMsR0FBRzs7Ozs0QkFDWixxQkFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQTs7d0JBQXRCLFNBQXNCLENBQUM7Ozs7O0tBQ3hCO0lBRUQ7O09BRUc7SUFDSCxhQUFhLEVBQWIsVUFBYyxJQUFhO1FBQ3pCLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRztJQUNHLE9BQU87Ozs7NEJBQ1gscUJBQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQXZCLFNBQXVCLENBQUM7Ozs7O0tBQ3pCO0lBRUQ7O09BRUc7SUFDRyxLQUFLOzs7OzRCQUNULHFCQUFNLG9CQUFPLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUFyQixTQUFxQixDQUFDOzs7OztLQUN2QjtJQUVEOztPQUVHO0lBQ0csUUFBUTs7Ozs0QkFDWixxQkFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQWpELFNBQWlELENBQUM7Ozs7O0tBQ25EO0lBRUQ7OztPQUdHO0lBQ0csY0FBYyxZQUFDLEdBQUc7Ozs7NEJBQ3RCLHFCQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFBOzt3QkFBckQsU0FBcUQsQ0FBQzs7Ozs7S0FDdkQ7SUFFRDs7T0FFRztJQUNHLFVBQVU7Ozs7NEJBQ2QscUJBQU0scUJBQWEsQ0FB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