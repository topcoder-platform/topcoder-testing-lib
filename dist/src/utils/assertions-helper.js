"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssertionsHelper = {
    /**
     * Expects the value1 to be equal to the value2
     * @param {String} value1
     * @param {String} value2
     * @param {String} value3
     */
    expectToBeEqual: function (value1, value2, value3) {
        if (value3 === void 0) { value3 = null; }
        if (value3) {
            expect(value1).toEqual(value2, value3);
        }
        else {
            expect(value1).toEqual(value2);
        }
    },
    /**
     * Expects the value1 to be same as value2
     * @param {String} value1
     * @param {String} value2
     * @param {String} value3
     */
    expectToBeSame: function (value1, value2, value3) {
        if (value3 === void 0) { value3 = null; }
        if (value3) {
            expect(value1).toBe(value2, value3);
        }
        else {
            expect(value1).toBe(value2);
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0aW9ucy1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvYXNzZXJ0aW9ucy1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFYSxRQUFBLGdCQUFnQixHQUFHO0lBQzlCOzs7OztPQUtHO0lBQ0gsZUFBZSxZQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBYTtRQUFiLHVCQUFBLEVBQUEsYUFBYTtRQUMzQyxJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsY0FBYyxZQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBYTtRQUFiLHVCQUFBLEVBQUEsYUFBYTtRQUMxQyxJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDTCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztDQUNGLENBQUMifQ==