"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRule = void 0;
var BaseRule = /** @class */ (function () {
    function BaseRule() {
    }
    BaseRule.prototype.SetNextRule = function (rule) {
        this.successorRule = rule;
    };
    return BaseRule;
}());
exports.BaseRule = BaseRule;
