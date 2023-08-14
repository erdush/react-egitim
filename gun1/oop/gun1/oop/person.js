"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (setName) {
            this.name = setName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
