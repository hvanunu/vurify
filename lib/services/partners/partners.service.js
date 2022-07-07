"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const partners_class_1 = require("./partners.class");
const partners_model_1 = __importDefault(require("../../models/partners.model"));
const partners_hooks_1 = __importDefault(require("./partners.hooks"));
function default_1(app) {
    const options = {
        Model: (0, partners_model_1.default)(app),
        paginate: app.get('paginate')
    };
    // Initialize our service with any options it requires
    app.use('/partners', new partners_class_1.Partners(options, app));
    // Get our initialized service so that we can register hooks
    const service = app.service('partners');
    service.hooks(partners_hooks_1.default);
}
exports.default = default_1;
