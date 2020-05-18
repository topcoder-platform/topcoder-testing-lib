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
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by classname
     */
    getElementByClassName: function (className, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.className(className), parentEl));
    },
    /**
     * Get all elements by classname
     * @param {string} className
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by classname
     */
    getAllElementsByClassName: function (className, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.className(className), parentEl)];
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
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by css
     */
    getElementByCss: function (css, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.css(css), parentEl));
    },
    /**
     * Get all elements by css
     * @param {string} cssName
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by css
     */
    getAllElementsByCss: function (cssName, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.css(cssName), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by id
     * @param {string} id
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by id
     */
    getElementById: function (id, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.id(id), parentEl));
    },
    /**
     * Get all elements by id
     * @param {string} id
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by id
     */
    getAllElementsById: function (id, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.id(id), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by javascript
     * @param {string|Function} js
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by js
     */
    getElementByJs: function (js, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.js(js), parentEl));
    },
    /**
     * Get all elements by js
     * @param {string} js
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by js
     */
    getAllElementsByJs: function (js, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.js(js), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by name
     * @param {string} name
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by name
     */
    getElementByName: function (name, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.name(name), parentEl));
    },
    /**
     * Get all elements by name
     * @param {string} name
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by name
     */
    getAllElementsByName: function (name, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.name(name), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by anchor element text
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by link text
     */
    getElementByLinkText: function (text, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.linkText(text), parentEl));
    },
    /**
     * Get all elements by link text
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by link text
     */
    getAllElementsByLinkText: function (text, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.linkText(text), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by partial anchor element text
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by partial link text
     */
    getElementByPartialLinkText: function (text, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.partialLinkText(text), parentEl));
    },
    /**
     * Get all elements by partial link text
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by partial link text
     */
    getAllElementsByPartialLinkText: function (text, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.partialLinkText(text), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by html tag
     * @param {string} tag
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by html tag
     */
    getElementByTag: function (tag, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.tagName(tag), parentEl));
    },
    /**
     * Get all elements by html tag
     * @param {string} tag
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by html tag
     */
    getAllElementsByTag: function (tag, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.tagName(tag), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by binding
     * @param {string} binding
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by binding
     */
    getElementByBinding: function (binding, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.binding(binding), parentEl));
    },
    /**
     * Get all elements by binding
     * @param {string} binding
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by binding
     */
    getAllElementsByBinding: function (binding, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.binding(binding), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by exact binding
     * @param {string} binding
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by exact binding
     */
    getElementByExactBinding: function (binding, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.exactBinding(binding), parentEl));
    },
    /**
     * Get all elements by exact binding
     * @param {string} binding
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by exact binding
     */
    getAllElementsByExactBinding: function (binding, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.exactBinding(binding), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by model
     * @param {string} model
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by model
     */
    getElementByModel: function (model, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.model(model), parentEl));
    },
    /**
     * Get all elements by model
     * @param {string} model
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by model
     */
    getAllElementsByModel: function (model, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.model(model), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by button text
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by button text
     */
    getElementByButtonText: function (text, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.buttonText(text), parentEl));
    },
    /**
     * Get all elements by button text
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by button text
     */
    getAllElementsByButtonText: function (text, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.buttonText(text), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by button containing substring
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by partial button text
     */
    getElementByPartialButtonText: function (text, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.partialButtonText(text), parentEl));
    },
    /**
     * Get all elements by partial button text
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by partial button text
     */
    getAllElementsByPartialButtonText: function (text, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.partialButtonText(text), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by repeater
     * @param {string} repeater
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by repeater
     */
    getElementByRepeater: function (repeater, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.repeater(repeater), parentEl));
    },
    /**
     * Get all elements by repeater
     * @param {string} repeater
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by repeater
     */
    getAllElementsByRepeater: function (repeater, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.repeater(repeater), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by exact repeater
     * @param {string} repeater
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by exact repeater
     */
    getElementByExactRepeater: function (repeater, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.exactRepeater(repeater), parentEl));
    },
    /**
     * Get all elements by exact repeater
     * @param {string} repeater
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by exact repeater
     */
    getAllElementsByExactRepeater: function (repeater, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.exactRepeater(repeater), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by css containing text
     * @param {string} cssSelector
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by css selector and text
     */
    getElementByCssContainingText: function (cssSelector, text, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.cssContainingText(cssSelector, text), parentEl));
    },
    /**
     * Get all elements by css containing text
     * @param {string} cssSelector
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by css selector and text
     */
    getAllElementsByCssContainingText: function (cssSelector, text, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.cssContainingText(cssSelector, text), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by options
     * @param {string} options
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by options
     */
    getElementByOptions: function (options, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.options(options), parentEl));
    },
    /**
     * Get all elements by options
     * @param {string} options
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by options
     */
    getAllElementsByOptions: function (options, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.options(options), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by deep css
     * @param {string} deepCss
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by deep css
     */
    getElementByDeepCss: function (deepCss, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.deepCss(deepCss), parentEl));
    },
    /**
     * Get all elements by deep css
     * @param {string} deepCss
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by deep css
     */
    getAllElementsByDeepCss: function (deepCss, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.deepCss(deepCss), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element by xPath
     * @param {string} xPath
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by xpath
     */
    getElementByXPath: function (xPath, parentEl) {
        return new tc_element_impl_1.TcElementImpl(this.getElement(protractor_1.by.xpath(xPath), parentEl));
    },
    /**
     * Get all elements by xPath
     * @param {string} xPath
     * @param {TcElementImpl} parentEl
     * @returns {Promise<TcElementImpl[]>} the resolved elements by xpath
     */
    getAllElementsByXPath: function (xPath, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllElements(protractor_1.by.xpath(xPath), parentEl)];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, this.getElementArray(list)];
                }
            });
        });
    },
    /**
     * Get element containing text
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element containing text
     */
    getElementContainingText: function (text, parentEl) {
        var xPath = "//*[contains(text(),\"" + text + "\")]";
        return this.getElementByXPath(xPath, parentEl);
    },
    /**
     * Get html tag element containing text
     * @param {string} tag
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element containing text
     */
    getTagElementContainingText: function (tag, text, parentEl) {
        var xPath = "//" + tag + "[contains(text(),\"" + text + "\")]";
        return this.getElementByXPath(xPath, parentEl);
    },
    /**
     * Get html tag element matching text
     * @param {string} tag
     * @param {string} text
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element matching text
     */
    getTagElementMatchingText: function (tag, text, parentEl) {
        var xPath = "//" + tag + "[(text()=\"" + text + "\")]";
        return this.getElementByXPath(xPath, parentEl);
    },
    /**
     * Get input element by type
     * @param {string} type
     * @param {TcElementImpl} parentEl
     * @returns {TcElementImpl} the resolved element by type
     */
    getInputElementByType: function (type, parentEl) {
        var xPath = "//input[@type=\"" + type + "\"]";
        return this.getElementByXPath(xPath, parentEl);
    },
    /**
     * Get TcElement Array
     * @param {ElementArrayFinder} elementArray
     * @returns {TcElementImpl[]} the resolved elements as array
     */
    getElementArray: function (elementArray) {
        var tcElementArray = [];
        for (var i = 0; i < elementArray.length; i++) {
            tcElementArray[i] = new tc_element_impl_1.TcElementImpl(elementArray[i]);
        }
        return tcElementArray;
    },
    /**
     * Get element by locator
     * @param {Locator} locator
     * @param {TcElementImpl} parentEl
     */
    getElement: function (locator, parentEl) {
        if (parentEl) {
            return parentEl.getElement().element(locator);
        }
        return protractor_1.element(locator);
    },
    /**
     * Get all elements by locator
     * @param {Locator} locator
     * @param {TcElementImpl} parentEl
     */
    getAllElements: function (locator, parentEl) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (parentEl) {
                    return [2 /*return*/, parentEl.getElement().all(locator)];
                }
                return [2 /*return*/, protractor_1.element.all(locator)];
            });
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZWxlbWVudC1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQU1vQjtBQUNwQixzREFBbUQ7QUFFdEMsUUFBQSxhQUFhLEdBQUc7SUFDM0I7Ozs7O09BS0c7SUFDSCxxQkFBcUIsRUFBckIsVUFDRSxTQUFpQixFQUNqQixRQUF3QjtRQUV4QixPQUFPLElBQUksK0JBQWEsQ0FDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUNuRCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0cseUJBQXlCLEVBQS9CLFVBQ0UsU0FBaUIsRUFDakIsUUFBd0I7Ozs7OzRCQUVYLHFCQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBQTs7d0JBQW5FLElBQUksR0FBRyxTQUE0RDt3QkFDekUsc0JBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBQzs7OztLQUNuQztJQUVEOzs7OztPQUtHO0lBQ0gsZUFBZSxFQUFmLFVBQWdCLEdBQUcsRUFBRSxRQUF3QjtRQUMzQyxPQUFPLElBQUksK0JBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDRyxtQkFBbUIsRUFBekIsVUFDRSxPQUFPLEVBQ1AsUUFBd0I7Ozs7OzRCQUVYLHFCQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLENB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