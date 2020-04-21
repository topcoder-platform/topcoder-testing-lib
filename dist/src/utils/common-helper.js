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
var appconfig = require("../../app-config.json");
var logger_1 = require("../../logger/logger");
var assertions_helper_1 = require("./assertions-helper");
var browser_helper_1 = require("./browser-helper");
var element_helper_1 = require("./element-helper");
exports.CommonHelper = {
    /**
     * Click on an element containing text
     * @param {String} text
     */
    clickOnElementContainingText: function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = element_helper_1.ElementHelper.getElementContainingText(text);
                        return [4 /*yield*/, element.click()];
                    case 1:
                        _a.sent();
                        logger_1.logger.info("Clicked on element containing text " + text);
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Click on a html tag element containing text
     * @param {String} tag
     * @param {String} text
     */
    clickOnTagElementContainingText: function (tag, text) {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = element_helper_1.ElementHelper.getTagElementContainingText(tag, text);
                        return [4 /*yield*/, element.click()];
                    case 1:
                        _a.sent();
                        logger_1.logger.info("Clicked on " + tag + " element containing text " + text);
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Verify page title
     * @param {String} title
     */
    verifyPageTitle: function (title) {
        return __awaiter(this, void 0, void 0, function () {
            var pageTitle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, browser_helper_1.BrowserHelper.getTitle()];
                    case 1:
                        pageTitle = _a.sent();
                        logger_1.logger.info("Current page title is " + pageTitle);
                        assertions_helper_1.AssertionsHelper.expectToBeEqual(pageTitle, title, "Provided title " + title + " does not match page title " + pageTitle);
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Verify page url
     * @param {String} url
     */
    verifyCurrentUrl: function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, browser_helper_1.BrowserHelper.getCurrentUrl()];
                    case 1:
                        currentUrl = _a.sent();
                        logger_1.logger.info("Current page url is " + currentUrl);
                        assertions_helper_1.AssertionsHelper.expectToBeEqual(url, currentUrl, "Provided title " + url + " does not match page title " + currentUrl);
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Verify pop window exists
     */
    verifyPopupWindow: function () {
        return __awaiter(this, void 0, void 0, function () {
            var windows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, browser_helper_1.BrowserHelper.getAllWindowHandles()];
                    case 1:
                        windows = _a.sent();
                        assertions_helper_1.AssertionsHelper.expectToBeSame(windows.length, 2, "Popup window did not open");
                        return [4 /*yield*/, browser_helper_1.BrowserHelper.switchTo(windows[1])];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, browser_helper_1.BrowserHelper.close()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, browser_helper_1.BrowserHelper.switchTo(windows[0])];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Verify pop up window's title
     * @param {String} title
     */
    /*async verifyPopupWindowWithTitle(title) {
      await this.verifyPopupWindow();
      const windows = await browser.getAllWindowHandles();
      const until = protractor.ExpectedConditions;
      const windowTitle = ElementHelper.getElementByXPath("//title");
      browser.ignoreSynchronization = true;
      await browser.switchTo().window(windows[1]);
      await browser.wait(until.presenceOf(windowTitle));
      const popupWindowTitle = await browser.getTitle();
      expect(popupWindowTitle).toEqual(
        title,
        `Provided title ${title} does not match page title ${popupWindowTitle}`
      );
      await browser.close();
      await browser.switchTo().window(windows[0]);
    },
  
    /**
     * Verify pop up window's url
     * @param {String} expectedUrl
     */
    /*async verifyPopupWindowWithUrl(expectedUrl) {
      await this.verifyPopupWindow();
      const windows = await browser.getAllWindowHandles();
      await browser.switchTo().window(windows[1]);
      const url = await browser.getCurrentUrl();
      expect(url).toEqual(
        expectedUrl,
        `Provided url ${expectedUrl} does not match current url ${url}`
      );
      await browser.close();
      await browser.switchTo().window(windows[0]);
    },
  
    /**
     * Get anchor element containing text and verify the href in that element
     * @param {String} text
     * @param {String} href
     */
    /*async verifyHrefInAnchorContainingText(text, href) {
      const anchorElement = ElementHelper.getTagElementContainingText("a", text);
      const anchorElementHref = await anchorElement.getAttribute("href");
      expect(anchorElementHref).toEqual(
        href,
        `Provided href ${href} does not match anchor element href ${anchorElementHref}`
      );
    },  */
    /**
     * Switch tab by opening tab and optionally verify header of new tab
     * @param {String} tag
     * @param {String} text
     * @param {String|Null} newTabHeaderTag
     * @param {String|Null} newTabHeaderText
     */
    switchTabByClickingOnTagWithText: function (tag, text, newTabHeaderTag, newTabHeaderText) {
        if (newTabHeaderTag === void 0) { newTabHeaderTag = null; }
        if (newTabHeaderText === void 0) { newTabHeaderText = null; }
        return __awaiter(this, void 0, void 0, function () {
            var headerElement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, element_helper_1.ElementHelper.getTagElementContainingText(tag, text).click()];
                    case 1:
                        _a.sent();
                        if (!newTabHeaderTag || !newTabHeaderText) {
                            // Don't verify header if not given
                            return [2 /*return*/];
                        }
                        headerElement = element_helper_1.ElementHelper.getTagElementContainingText(newTabHeaderTag, newTabHeaderText);
                        return [4 /*yield*/, browser_helper_1.BrowserHelper.waitUntilVisibilityOf(headerElement, appconfig.Timeout.ElementVisibility, "Element did not display within timeout")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9jb21tb24taGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUQ7QUFDbkQsOENBQTZDO0FBQzdDLHlEQUF1RDtBQUN2RCxtREFBaUQ7QUFDakQsbURBQWlEO0FBQ3BDLFFBQUEsWUFBWSxHQUFHO0lBQzFCOzs7T0FHRztJQUNHLDRCQUE0QixZQUFDLElBQUk7Ozs7Ozt3QkFDL0IsT0FBTyxHQUFHLDhCQUFhLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzdELHFCQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQXJCLFNBQXFCLENBQUM7d0JBQ3RCLGVBQU0sQ0FBQyxJQUFJLENBQUMsd0NBQXNDLElBQU0sQ0FBQyxDQUFDOzs7OztLQUMzRDtJQUVEOzs7O09BSUc7SUFDRywrQkFBK0IsWUFBQyxHQUFHLEVBQUUsSUFBSTs7Ozs7O3dCQUN2QyxPQUFPLEdBQUcsOEJBQWEsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3JFLHFCQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQXJCLFNBQXFCLENBQUM7d0JBQ3RCLGVBQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWMsR0FBRyxpQ0FBNEIsSUFBTSxDQUFDLENBQUM7Ozs7O0tBQ2xFO0lBRUQ7OztPQUdHO0lBQ0csZUFBZSxZQUFDLEtBQUs7Ozs7OzRCQUNQLHFCQUFNLDhCQUFhLENBQUMsUUFBUSxFQUFFLEVBQUE7O3dCQUExQyxTQUFTLEdBQUcsU0FBOEI7d0JBQ2hELGVBQU0sQ0FBQyxJQUFJLENBQUMsMkJBQXlCLFNBQVcsQ0FBQyxDQUFDO3dCQUNsRCxvQ0FBZ0IsQ0FBQyxlQUFlLENBQzlCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsb0JBQWtCLEtBQUssbUNBQThCLFNBQVcsQ0FDakUsQ0FBQzs7Ozs7S0FDSDtJQUVEOzs7T0FHRztJQUNHLGdCQUFnQixZQUFDLEdBQUc7Ozs7OzRCQUNMLHFCQUFNLDhCQUFhLENBQUMsYUFBYSxFQUFFLEVBQUE7O3dCQUFoRCxVQUFVLEdBQUcsU0FBbUM7d0JBQ3RELGVBQU0sQ0FBQyxJQUFJLENBQUMseUJBQXVCLFVBQVksQ0FBQyxDQUFDO3dCQUNqRCxvQ0FBZ0IsQ0FBQyxlQUFlLENBQzlCLEdBQUcsRUFDSCxVQUFVLEVBQ1Ysb0JBQWtCLEdBQUcsbUNBQThCLFVBQVksQ0FDaEUsQ0FBQzs7Ozs7S0FDSDtJQUVEOztPQUVHO0lBQ0csaUJBQWlCOzs7Ozs0QkFDTCxxQkFBTSw4QkFBYSxDQUFDLG1CQUFtQixFQUFFLEVBQUE7O3dCQUFuRCxPQUFPLEdBQUcsU0FBeUM7d0JBQ3pELG9DQUFnQixDQUFDLGNBQWMsQ0FDN0IsT0FBTyxDQUFDLE1BQU0sRUFDZCxDQUFDLEVBQ0QsMkJBQTJCLENBQzVCLENBQUM7d0JBQ0YscUJBQU0sOEJBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUF4QyxTQUF3QyxDQUFDO3dCQUN6QyxxQkFBTSw4QkFBYSxDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFBM0IsU0FBMkIsQ0FBQzt3QkFDNUIscUJBQU0sOEJBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUF4QyxTQUF3QyxDQUFDOzs7OztLQUMxQztJQUVEOzs7T0FHRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW9CRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztPQWlCRztJQUNIOzs7Ozs7O1VBT007SUFFTjs7Ozs7O09BTUc7SUFDRyxnQ0FBZ0MsWUFDcEMsR0FBRyxFQUNILElBQUksRUFDSixlQUFzQixFQUN0QixnQkFBdUI7UUFEdkIsZ0NBQUEsRUFBQSxzQkFBc0I7UUFDdEIsaUNBQUEsRUFBQSx1QkFBdUI7Ozs7OzRCQUV2QixxQkFBTSw4QkFBYSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQWxFLFNBQWtFLENBQUM7d0JBRW5FLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTs0QkFDekMsbUNBQW1DOzRCQUNuQyxzQkFBTzt5QkFDUjt3QkFDSyxhQUFhLEdBQUcsOEJBQWEsQ0FBQywyQkFBMkIsQ0FDN0QsZUFBZSxFQUNmLGdCQUFnQixDQUNqQixDQUFDO3dCQUNGLHFCQUFNLDhCQUFhLENBQUMscUJBQXFCLENBQ3ZDLGFBQWEsRUFDYixTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUNuQyx3Q0FBd0MsQ0FDekMsRUFBQTs7d0JBSkQsU0FJQyxDQUFDOzs7OztLQUNIO0NBQ0YsQ0FBQyJ9