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
exports.QueueRule = void 0;
var baserule_1 = require("./baserule");
var QueueRule = /** @class */ (function (_super) {
    __extends(QueueRule, _super);
    function QueueRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QueueRule.prototype.HandleRule = function (person) {
        // Queue rule kuralları buraya yazılacak. 
        var queueStatus = true;
        if (queueStatus) {
            this.successorRule.HandleRule(person);
        }
    };
    return QueueRule;
}(baserule_1.BaseRule));
exports.QueueRule = QueueRule;
