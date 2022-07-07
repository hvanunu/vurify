"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signatures_class_1 = require("./signatures.class");
const signatures_model_1 = __importDefault(require("../../models/signatures.model"));
const signatures_hooks_1 = __importDefault(require("./signatures.hooks"));
function default_1(app) {
    const options = {
        Model: (0, signatures_model_1.default)(app),
        paginate: app.get('paginate')
    };
    // Initialize our service with any options it requires
    app.use('/signatures', new signatures_class_1.Signatures(options, app));
    // Get our initialized service so that we can register hooks
    const service = app.service('signatures');
    service.hooks(signatures_hooks_1.default);
}
exports.default = default_1;
