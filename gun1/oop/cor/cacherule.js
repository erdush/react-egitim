"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheRule = void 0;
var baserule_1 = require("./baserule");
var CacheRule = /** @class */ (function (_super) {
    __extends(CacheRule, _super);
    function CacheRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CacheRule.prototype.HandleRule = function (person) {
        // Cache kontrolm kodları buraya yazılacak.
        var cacheStatus = true;
        if (person.city == "Ankara") {
            cacheStatus = false;
        }
        if (cacheStatus) {
            this.successorRule.HandleRule(person);
        }
    };
    return CacheRule;
}(baserule_1.BaseRule));
exports.CacheRule = CacheRule;
