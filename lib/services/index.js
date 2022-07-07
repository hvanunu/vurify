"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const partners_service_1 = __importDefault(require("./partners/partners.service"));
const extract_domain_1 = __importDefault(require("extract-domain"));
const signatures_service_1 = __importDefault(require("./signatures/signatures.service"));
const users_service_1 = __importDefault(require("./users/users.service"));
// Don't remove this comment. It's needed to format import lines nicely.
function default_1(app) {
    app.get("/iframe/:apiKey", function (req, res) {
        let apiKey = req.params.apiKey;
        const items = app.service("partners").find({ "apiKey": apiKey })
            .then(value => {
            let partner;
            let dbRes = value;
            if (dbRes.total > 0) {
                partner = dbRes.data[0];
                const parseResult = (0, extract_domain_1.default)(req.hostname, { tld: true });
                //console.log(parseResult)
                if (partner.domain == req.hostname) {
                    console.log("match");
                    res.render('iframe', partner);
                }
            }
        })
            .catch(reason => {
            console.error(reason);
        });
    });
    app.get("/parent_v1", function (req, res) {
        res.render('v1_login');
    });
    app.configure(partners_service_1.default);
    app.configure(signatures_service_1.default);
    app.configure(users_service_1.default);
}
exports.default = default_1;
