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
exports.ExpectedConditionsHelper = {
    /**
     * Return Visibility of the given element expected condition
     * @param {TcElementImpl} tcElement
     */
    getUntilVisibilityOfCondition: function (tcElement) {
        return __awaiter(this, void 0, void 0, function () {
            var until, element;
            return __generator(this, function (_a) {
                until = protractor_1.protractor.ExpectedConditions;
                element = tcElement.getElement();
                return [2 /*return*/, until.visibilityOf(element)];
            });
        });
    },
    /**
     * eturn Invisibility of the given element expected condition
     * @param {TcElementImpl} tcElement
     */
    getUntilInvisibilityOfCondition: function (tcElement) {
        return __awaiter(this, void 0, void 0, function () {
            var until, element;
            return __generator(this, function (_a) {
                until = protractor_1.protractor.ExpectedConditions;
                element = tcElement.getElement();
                return [2 /*return*/, until.invisibilityOf(element)];
            });
        });
    },
    /**
     * Return Visibility of the given element expected condition
     * @param {TcElementImpl} tcElement
     */
    getUntilPresenceOfCondition: function (tcElement) {
        return __awaiter(this, void 0, void 0, function () {
            var until, element;
            return __generator(this, function (_a) {
                until = protractor_1.protractor.ExpectedConditions;
                element = tcElement.getElement();
                return [2 /*return*/, until.presenceOf(element)];
            });
        });
    },
    /**
     * eturn Invisibility of the given element expected condition
     * @param {TcElementImpl} tcElement
     */
    getUntilToBeClickableCondition: function (tcElement) {
        return __awaiter(this, void 0, void 0, function () {
            var until, element;
            return __generator(this, function (_a) {
                until = protractor_1.protractor.ExpectedConditions;
                element = tcElement.getElement();
                return [2 /*return*/, until.elementToBeClickable(element)];
            });
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZWN0ZWQtY29uZGl0aW9ucy1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZXhwZWN0ZWQtY29uZGl0aW9ucy1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF3QztBQUczQixRQUFBLHdCQUF3QixHQUFHO0lBQ3RDOzs7T0FHRztJQUNHLDZCQUE2QixFQUFuQyxVQUFvQyxTQUF3Qjs7OztnQkFDcEQsS0FBSyxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3RDLE9BQU8sR0FBRyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3ZDLHNCQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUM7OztLQUNwQztJQUNEOzs7T0FHRztJQUNHLCtCQUErQixFQUFyQyxVQUFzQyxTQUF3Qjs7OztnQkFDdEQsS0FBSyxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3RDLE9BQU8sR0FBRyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3ZDLHNCQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUM7OztLQUN0QztJQUNEOzs7T0FHRztJQUNHLDJCQUEyQixFQUFqQyxVQUFrQyxTQUF3Qjs7OztnQkFDbEQsS0FBSyxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3RDLE9BQU8sR0FBRyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3ZDLHNCQUFPLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUM7OztLQUNsQztJQUNEOzs7T0FHRztJQUNHLDhCQUE4QixFQUFwQyxVQUFxQyxTQUF3Qjs7OztnQkFDckQsS0FBSyxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3RDLE9BQU8sR0FBRyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3ZDLHNCQUFPLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsRUFBQzs7O0tBQzVDO0NBQ0YsQ0FBQyJ9