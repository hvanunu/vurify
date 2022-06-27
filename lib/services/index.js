"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = __importDefault(require("./users/users.service"));
// Don't remove this comment. It's needed to format import lines nicely.
function default_1(app) {
    app.configure(users_service_1.default);
    app.get("/iframe/:apiKey", function (req, res) {
        res.render('iframe', { apiKey: req.params.apiKey });
    });
    app.get("/parent_v1", function (req, res) {
        res.render('v1_login');
    });
}
exports.default = default_1;
