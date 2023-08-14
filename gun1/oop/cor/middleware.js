"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
var authrule_1 = require("./authrule");
var cacherule_1 = require("./cacherule");
var queuerule_1 = require("./queuerule");
var Middleware = /** @class */ (function () {
    function Middleware() {
        this.authRule = new authrule_1.AuthRule();
        this.cacheRule = new cacherule_1.CacheRule();
        this.queueRule = new queuerule_1.QueueRule();
        // Zinciri tanımla
        this.authRule.SetNextRule(this.cacheRule);
        this.cacheRule.SetNextRule(this.queueRule);
    }
    Middleware.prototype.SetPerson = function (person) {
        // zinciri tetikle
        this.authRule.HandleRule(person);
    };
    return Middleware;
}());
exports.Middleware = Middleware;
