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
exports.AuthRule = void 0;
var baserule_1 = require("./baserule");
var AuthRule = /** @class */ (function (_super) {
    __extends(AuthRule, _super);
    function AuthRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthRule.prototype.HandleRule = function (person) {
        // Auth kontrol kodları yazılacak. 
        console.log("Auth kontrol yapıldı.");
        var authStatus = true;
        if (!person.headofficeemployee) {
            authStatus = false;
        }
        if (authStatus) {
            this.successorRule.HandleRule(person);
        }
    };
    return AuthRule;
}(baserule_1.BaseRule));
exports.AuthRule = AuthRule;
