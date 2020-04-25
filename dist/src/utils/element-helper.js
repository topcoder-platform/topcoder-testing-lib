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
var tc_element_impl_1 = require("../tc-element-impl");
exports.ElementHelper = {
    /**
     * Get element by classname
     * @param {string} className
     * @param {TcElement} parentEl
     */
    getElementByClassName: function (className, parentEl) {
        if (parentEl) {
            var el = parentEl.getElement();
            return new tc_element_impl_1.TcElementImpl(el.element(protractor_1.by.className(className)));
        }
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.className(className)));
    },
    /**
     * Get all elements by classname
     * @param {string} className
     */
    getAllElementsByClassName: function (className) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.element.all(protractor_1.by.className(className))];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get all elements by css
     * @param {string} className
     */
    getAllElementsByCss: function (cssName) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.element.all(protractor_1.by.css(cssName))];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by css
     * @param {string} css
     */
    getElementByCss: function (css) {
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.css(css)));
    },
    /**
     * Get element by id
     * @param {string} id
     */
    getElementById: function (id) {
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.id(id)));
    },
    /**
     * Get element by javascript
     * @param {string|Function} js
     */
    getElementByJs: function (js) {
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.js(js)));
    },
    /**
     * Get element by name
     * @param {string} name
     */
    getElementByName: function (name) {
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.name(name)));
    },
    /**
     * Get element by partial anchor element text
     * @param {string} text
     */
    getElementByPartialLinkText: function (text) {
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.partialLinkText(text)));
    },
    /**
     * Get element by html tag
     * @param {string} tag
     */
    getElementsByTag: function (tag) {
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.tagName(tag)));
    },
    /**
     * Get element by binding
     * @param {string} binding
     */
    getElementByBinding: function (binding) {
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.binding(binding)));
    },
    /**
     * Get element by exact binding
     * @param {string} binding
     */
    getElementByExactBinding: function (binding) {
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.exactBinding(binding)));
    },
    /**
     * Get element by model
     * @param {string} model
     */
    getElementByModel: function (model) {
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.model(model)));
    },
    /**
     * Get element by button containing substring
     * @param {string} text
     */
    getElementByPartialButtonText: function (text) {
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.partialButtonText(text)));
    },
    /**
     * Get element by repeater
     * @param {string} repeater
     */
    getElementByRepeater: function (repeater) {
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.repeater(repeater)));
    },
    /**
     * Get element by exact repeater
     * @param {string} repeater
     */
    getElementByExactRepeater: function (repeater) {
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.exactRepeater(repeater)));
    },
    /**
     * Get element by css containing text
     * @param {string} cssSelector
     * @param {string} text
     */
    getElementByCssContainingText: function (cssSelector, text) {
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.cssContainingText(cssSelector, text)));
    },
    /**
     * Get element by options
     * @param {string} options
     */
    getElementByOptions: function (options) {
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.options(options)));
    },
    /**
     * Get element by deep css
     * @param {string} deepCss
     */
    getElementByDeepCss: function (deepCss) {
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.deepCss(deepCss)));
    },
    /**
     * Get element by xPath
     * @param {string} xPath
     */
    getElementByXPath: function (xPath) {
        return new tc_element_impl_1.TcElementImpl(protractor_1.element(protractor_1.by.xpath(xPath)));
    },
    /**
     * Get element containing text
     * @param {string} text
     */
    getElementContainingText: function (text) {
        var xPath = "//*[contains(text(),\"" + text + "\")]";
        return this.getElementByXPath(xPath);
    },
    /**
     * Get html tag element containing text
     * @param {string} tag
     * @param {string} text
     */
    getTagElementContainingText: function (tag, text) {
        var xPath = "//" + tag + "[contains(text(),\"" + text + "\")]";
        return this.getElementByXPath(xPath);
    },
    /**
     * Get input element by type
     * @param {string} type
     */
    getInputElementByType: function (type) {
        var xPath = "//input[@type=\"" + type + "\"]";
        return this.getElementByXPath(xPath);
    },
    /**
     * Get TcElement Array
     * @param {ElementArrayFinder} elementArray
     */
    getElementArray: function (elementArray) {
        var tcElementArray = [];
        for (var i = 0; i < elementArray.length; i++) {
            tcElementArray[i] = elementArray[i];
        }
        return tcElementArray;
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZWxlbWVudC1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUE2RDtBQUM3RCxzREFBbUQ7QUFFdEMsUUFBQSxhQUFhLEdBQUc7SUFDM0I7Ozs7T0FJRztJQUNILHFCQUFxQixFQUFyQixVQUFzQixTQUFpQixFQUFFLFFBQXdCO1FBQy9ELElBQUksUUFBUSxFQUFFO1lBQ1osSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2pDLE9BQU8sSUFBSSwrQkFBYSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxPQUFPLElBQUksK0JBQWEsQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7O09BR0c7SUFDRyx5QkFBeUIsWUFBQyxTQUFTOzs7Ozs0QkFDMUIscUJBQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFBOzt3QkFBakQsSUFBSSxHQUFHLFNBQTBDO3dCQUN2RCxzQkFBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFDOzs7O0tBQ25DO0lBRUQ7OztPQUdHO0lBQ0csbUJBQW1CLFlBQUMsT0FBTzs7Ozs7NEJBQ2xCLHFCQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQTs7d0JBQXpDLElBQUksR0FBRyxTQUFrQzt3QkFDL0Msc0JBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFB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