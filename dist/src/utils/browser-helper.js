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
     * Sleep
     * @param {number} msec
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
     * Wait until the element becomes visible
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUnitilVisibilityOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            var until, element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        element = tcElement.getElement();
                        if (!(timeout && message)) return [3 /*break*/, 2];
                        return [4 /*yield*/, protractor_1.browser.wait(until.visibilityOf(element), timeout, message)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        if (!timeout) return [3 /*break*/, 4];
                        return [4 /*yield*/, protractor_1.browser.wait(until.visibilityOf(element), timeout)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, protractor_1.browser.wait(until.visibilityOf(element))];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
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
    waitUnitilInVisibilityOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            var until, element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        element = tcElement.getElement();
                        if (!(timeout && message)) return [3 /*break*/, 2];
                        return [4 /*yield*/, protractor_1.browser.wait(until.invisibilityOf(element), timeout, message)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        if (!timeout) return [3 /*break*/, 4];
                        return [4 /*yield*/, protractor_1.browser.wait(until.invisibilityOf(element), timeout)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, protractor_1.browser.wait(until.invisibilityOf(element))];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
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
    waitUnitilPresenceOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            var until, element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        element = tcElement.getElement();
                        if (!(timeout && message)) return [3 /*break*/, 2];
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(element), timeout, message)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        if (!timeout) return [3 /*break*/, 4];
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(element), timeout)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(element))];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
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
    waitUnitilClickableOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            var until, element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        element = tcElement.getElement();
                        if (!(timeout && message)) return [3 /*break*/, 2];
                        return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(element), timeout, message)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        if (!timeout) return [3 /*break*/, 4];
                        return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(element), timeout)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(element))];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvYnJvd3Nlci1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUErRTtBQUdsRSxRQUFBLGFBQWEsR0FBRztJQUMzQjs7O09BR0c7SUFDRyxJQUFJLFlBQUMsR0FBRzs7Ozs0QkFDWixxQkFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQTs7d0JBQXRCLFNBQXNCLENBQUM7Ozs7O0tBQ3hCO0lBRUQ7O09BRUc7SUFDSCxhQUFhLEVBQWIsVUFBYyxJQUFhO1FBQ3pCLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRztJQUNHLE9BQU87Ozs7NEJBQ1gscUJBQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQXZCLFNBQXVCLENBQUM7Ozs7O0tBQ3pCO0lBRUQ7O09BRUc7SUFDRyxLQUFLOzs7OzRCQUNULHFCQUFNLG9CQUFPLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUFyQixTQUFxQixDQUFDOzs7OztLQUN2QjtJQUVEOztPQUVHO0lBQ0csUUFBUTs7Ozs0QkFDWixxQkFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQWpELFNBQWlELENBQUM7Ozs7O0tBQ25EO0lBRUQ7OztPQUdHO0lBQ0csY0FBYyxZQUFDLEdBQUc7Ozs7NEJBQ3RCLHFCQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFBOzt3QkFBckQsU0FBcUQsQ0FBQzs7Ozs7S0FDdkQ7SUFFRDs7O09BR0c7SUFDRyxLQUFLLFlBQUMsSUFBSTs7Ozs0QkFDZCxxQkFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXpCLFNBQXlCLENBQUM7Ozs7O0tBQzNCO0lBRUQ7O09BRUc7SUFDRyxVQUFVOzs7OzRCQUNkLHFCQUFNLHFCQUFhLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUE3QixTQUE2QixDQUFDO3dCQUM5QixxQkFBTSxxQkFBYSxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBOUIsU0FBOEIsQ0FBQzt3QkFDL0IscUJBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQywwREFBMEQ7Ozs7O0tBQzlGO0lBRUQ7O09BRUc7SUFDRyxRQUFROzs7Z0JBQ1osc0JBQU8sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsRUFBQzs7O0tBQzNCO0lBRUQ7O09BRUc7SUFDRyxhQUFhOzs7Z0JBQ2pCLHNCQUFPLG9CQUFPLENBQUMsYUFBYSxFQUFFLEVBQUM7OztLQUNoQztJQUVEOztPQUVHO0lBQ0csbUJBQW1COzs7Z0JBQ3ZCLHNCQUFPLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsRUFBQzs7O0tBQ3RDO0lBRUQ7OztPQUdHO0lBQ0csY0FBYyxZQUFDLE1BQU07Ozs7NEJBQ3pCLHFCQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBdkMsU0FBdUMsQ0FBQzs7Ozs7S0FDekM7SUFFRDs7T0FFRztJQUNHLE9BQU87Ozs7NEJBQ1gscUJBQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUF6QyxTQUF5QyxDQUFDOzs7OztLQUMzQztJQUVEOzs7OztPQUtHO0lBQ0csc0JBQXNCLEVBQTVCLFVBQ0UsU0FBd0IsRUFDeEIsT0FBZ0IsRUFDaEIsT0FBZ0I7Ozs7Ozt3QkFFVixLQUFLLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDdEMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzs2QkFDbkMsQ0FBQSxPQUFPLElBQUksT0FBTyxDQUFBLEVBQWxCLHdCQUFrQjt3QkFDcEIscUJBQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUE7O3dCQUFqRSxTQUFpRSxDQUFDOzs7NkJBQ3pELE9BQU8sRUFBUCx3QkFBTzt3QkFDaEIscUJBQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBQTs7d0JBQXhELFNBQXdELENBQUM7OzRCQUV6RCxxQkFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUE7O3dCQUEvQyxTQUErQyxDQUFDOzs7Ozs7S0FFbkQ7SUFFRDs7Ozs7T0FLRztJQUNHLHdCQUF3QixFQUE5QixVQUNFLFNBQXdCLEVBQ3hCLE9BQWdCLEVBQ2hCLE9BQWdCOzs7Ozs7d0JBRVYsS0FBSyxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7d0JBQ3RDLE9BQU8sR0FBRyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7NkJBQ25DLENBQUEsT0FBTyxJQUFJLE9BQU8sQ0FBQSxFQUFsQix3QkFBa0I7d0JBQ3BCLHFCQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFBOzt3QkFBbkUsU0FBbUUsQ0FBQzs7OzZCQUMzRCxPQUFPLEVBQVAsd0JBQU87d0JBQ2hCLHFCQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUE7O3dCQUExRCxTQUEwRCxDQUFDOzs0QkFFM0QscUJBQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFBOzt3QkFBakQsU0FBaUQsQ0FBQzs7Ozs7O0tBRXJEO0lBRUQ7Ozs7O09BS0c7SUFDRyxvQkFBb0IsRUFBMUIsVUFDRSxTQUF3QixFQUN4QixPQUFnQixFQUNoQixPQUFnQjs7Ozs7O3dCQUVWLEtBQUssR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO3dCQUN0QyxPQUFPLEdBQUcsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDOzZCQUNuQyxDQUFBLE9BQU8sSUFBSSxPQUFPLENBQUEsRUFBbEIsd0JBQWtCO3dCQUNwQixxQkFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBQTs7d0JBQS9ELFNBQStELENBQUM7Ozs2QkFDdkQsT0FBTyxFQUFQLHdCQUFPO3dCQUNoQixxQkFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUFBOzt3QkFBdEQsU0FBc0QsQ0FBQzs7NEJBRXZELHFCQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQTs7d0JBQTdDLFNBQTZDLENBQUM7Ozs7OztLQUVqRDtJQUVEOzs7OztPQUtHO0lBQ0cscUJBQXFCLEVBQTNCLFVBQ0UsU0FBd0IsRUFDeEIsT0FBZ0IsRUFDaEIsT0FBZ0I7Ozs7Ozt3QkFFVixLQUFLLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDdEMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzs2QkFDbkMsQ0FBQSxPQUFPLElBQUksT0FBTyxDQUFBLEVBQWxCLHdCQUFrQjt3QkFDcEIscUJBQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBQTs7d0JBQXpFLFNBQXlFLENBQUM7Ozs2QkFDakUsT0FBTyxFQUFQLHdCQUFPO3dCQUNoQixxQkFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUE7O3dCQUFoRSxTQUFnRSxDQUFDOzs0QkFFakUscUJBQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUE7O3dCQUF2RCxTQUF1RCxDQUFDOzs7Ozs7S0FFM0Q7Q0FDRixDQUFDIn0=