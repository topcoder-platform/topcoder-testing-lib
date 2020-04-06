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
        protractor_1.browser.get(url);
    },
    /**
     * initialize the browser
     */
    initialize: function () {
        exports.BrowserHelper.restart();
        protractor_1.browser.driver.manage().window().maximize();
        exports.BrowserHelper.setIgnoreSync(true); // This is set  to false when accessing Non Angular Pages.
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
        protractor_1.browser.restart();
    },
    /**
     * Wait until the visibility of the given element
     * @param {ElementFinder} element
     * @param {nember} timeout
     * @param {string} message
     */
    waitUntilVisibilityOf: function (element, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            var until;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
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
     * @param {ElementFinder} element
     * @param {nember} timeout
     * @param {string} message
     */
    waitUntilInvisibilityOf: function (element, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            var until;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
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
     * @param {ElementFinder} element
     * @param {nember} timeout
     * @param {string} message
     */
    waitUntilPresenceOf: function (element, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            var until;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
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
     * @param {ElementFinder} element
     * @param {nember} timeout
     * @param {string} message
     */
    waitUntilElementToBeClickable: function (element, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            var until;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        until = protractor_1.protractor.ExpectedConditions;
                        return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(element), timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvYnJvd3Nlci1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFnRTtBQUVuRCxRQUFBLGFBQWEsR0FBRztJQUMzQjs7O09BR0c7SUFDSCxJQUFJLFlBQUMsR0FBRztRQUNOLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVU7UUFDUixxQkFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLHFCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsMERBQTBEO0lBQy9GLENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWEsRUFBYixVQUFjLElBQWE7UUFDekIsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsT0FBTztRQUNMLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0cscUJBQXFCLEVBQTNCLFVBQ0UsT0FBc0IsRUFDdEIsT0FBZSxFQUNmLE9BQWU7Ozs7Ozt3QkFFVCxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDNUMscUJBQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUE7O3dCQUFqRSxTQUFpRSxDQUFDOzs7OztLQUNuRTtJQUVEOzs7OztPQUtHO0lBQ0csdUJBQXVCLEVBQTdCLFVBQ0UsT0FBc0IsRUFDdEIsT0FBZSxFQUNmLE9BQWU7Ozs7Ozt3QkFFVCxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDNUMscUJBQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUE7O3dCQUFuRSxTQUFtRSxDQUFDOzs7OztLQUNyRTtJQUVEOzs7OztPQUtHO0lBQ0csbUJBQW1CLEVBQXpCLFVBQ0UsT0FBc0IsRUFDdEIsT0FBZSxFQUNmLE9BQWU7Ozs7Ozt3QkFFVCxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDNUMscUJBQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUE7O3dCQUEvRCxTQUErRCxDQUFDOzs7OztLQUNqRTtJQUVEOzs7OztPQUtHO0lBQ0csNkJBQTZCLEVBQW5DLFVBQ0UsT0FBc0IsRUFDdEIsT0FBZSxFQUNmLE9BQWU7Ozs7Ozt3QkFFVCxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDNUMscUJBQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBQTs7d0JBQXpFLFNBQXlFLENBQUM7Ozs7O0tBQzNFO0NBQ0YsQ0FBQyJ9