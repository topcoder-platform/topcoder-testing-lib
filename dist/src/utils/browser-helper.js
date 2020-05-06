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
     * @returns {Promise<any>}
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
     * @returns {Promise<any>}
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
     * @returns {Promise<void>}
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
     * @returns {Promise<void>}
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
     * @returns {Promise<void>}
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
     * Sleep
     * @param {number} msec
     * @returns {Promise<void>}
     */
    sleep: function (msec) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.sleep(msec)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * initialize the browser
     * @returns {Promise<void>}
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
     * Get Title
     * @returns {Promise<string>}
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
     * @returns {Promise<string>}
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
     * @returns {Promise<string[]>}
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
     * @returns {Promise<void>}
     */
    switchToWindow: function (window) {
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
    /**
     * Refresh
     * @returns {Promise<void>}
     */
    refresh: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.driver.navigate().refresh()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Moves the mouse to the element location
     * @param {TcElementImpl} tcElement
     */
    mouseMove: function (tcElement) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.actions().mouseMove(tcElement.getElement()).perform()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the element becomes visible
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilVisibilityOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () { return protractor_1.protractor.ExpectedConditions.visibilityOf(tcElement.getElement()); }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the element becomes invisible
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilInVisibilityOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () {
                            return protractor_1.protractor.ExpectedConditions.invisibilityOf(tcElement.getElement());
                        }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the element is present
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilPresenceOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () { return protractor_1.protractor.ExpectedConditions.presenceOf(tcElement.getElement()); }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the element is clickable
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilClickableOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () {
                            return protractor_1.protractor.ExpectedConditions.elementToBeClickable(tcElement.getElement());
                        }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Waits until alert is displayed
     * @param {number} timeout
     * @param {string} message
     */
    waitUntilAlertIsPresent: function (timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () { return protractor_1.protractor.ExpectedConditions.alertIsPresent(); }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the given text to be present in the element
     * @param {TcElementImpl} tcElement
     * @param {string} text
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilTextToBePresentInElement: function (tcElement, text, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () {
                            return protractor_1.protractor.ExpectedConditions.textToBePresentInElement(tcElement.getElement(), text);
                        }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the text to be present in elementValue
     * @param {TcElementImpl} tcElement
     * @param {string} text
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilTextToBePresentInElementValue: function (tcElement, text, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () {
                            return protractor_1.protractor.ExpectedConditions.textToBePresentInElementValue(tcElement.getElement(), text);
                        }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the title of page contains
     * @param {string} text
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilTitleContains: function (title, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () { return protractor_1.protractor.ExpectedConditions.titleContains(title); }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the title of page is exactly as the given title
     * @param {string} title
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilTitleIs: function (title, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () { return protractor_1.protractor.ExpectedConditions.titleIs(title); }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the url contains the given text
     * @param {string} text
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilUrlContains: function (text, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () { return protractor_1.protractor.ExpectedConditions.urlContains(text); }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the url is exactly equal to given text
     * @param {string} text
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilUrlIs: function (text, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () { return protractor_1.protractor.ExpectedConditions.urlIs(text); }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the element is not present in DOM
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilStalenessOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () { return protractor_1.protractor.ExpectedConditions.stalenessOf(tcElement.getElement()); }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the element is selected
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilElementToBeSelected: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () {
                            return protractor_1.protractor.ExpectedConditions.elementToBeSelected(tcElement.getElement());
                        }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the function applied
     * @param {function} func
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntil: function (func, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(timeout && message)) return [3 /*break*/, 2];
                        return [4 /*yield*/, protractor_1.browser.wait(func(), timeout, message)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        if (!timeout) return [3 /*break*/, 4];
                        return [4 /*yield*/, protractor_1.browser.wait(func(), timeout)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, protractor_1.browser.wait(func())];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvYnJvd3Nlci1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFpRDtBQUdwQyxRQUFBLGFBQWEsR0FBRztJQUMzQjs7OztPQUlHO0lBQ0csSUFBSSxFQUFWLFVBQVcsR0FBRzs7Ozs0QkFDWixxQkFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQTs7d0JBQXRCLFNBQXNCLENBQUM7Ozs7O0tBQ3hCO0lBRUQ7O09BRUc7SUFDSCxhQUFhLEVBQWIsVUFBYyxJQUFhO1FBQ3pCLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7O09BR0c7SUFDRyxPQUFPLEVBQWI7Ozs7NEJBQ0UscUJBQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQXZCLFNBQXVCLENBQUM7Ozs7O0tBQ3pCO0lBRUQ7OztPQUdHO0lBQ0csS0FBSyxFQUFYOzs7OzRCQUNFLHFCQUFNLG9CQUFPLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUFyQixTQUFxQixDQUFDOzs7OztLQUN2QjtJQUVEOzs7T0FHRztJQUNHLFFBQVEsRUFBZDs7Ozs0QkFDRSxxQkFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQWpELFNBQWlELENBQUM7Ozs7O0tBQ25EO0lBRUQ7Ozs7T0FJRztJQUNHLGNBQWMsRUFBcEIsVUFBcUIsR0FBRzs7Ozs0QkFDdEIscUJBQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUE7O3dCQUFyRCxTQUFxRCxDQUFDOzs7OztLQUN2RDtJQUVEOzs7O09BSUc7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