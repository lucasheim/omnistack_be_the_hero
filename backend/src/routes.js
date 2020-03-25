"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var OngController_1 = require("./controllers/OngController");
var IncidentController_1 = require("./controllers/IncidentController");
var ProfileController_1 = require("./controllers/ProfileController");
var SessionController_1 = require("./controllers/SessionController");
var routes = express_1.default.Router();
exports.routes = routes;
routes.post("/sessions", SessionController_1.SessionController.create);
routes.get("/ongs", OngController_1.OngController.index);
routes.post("/ongs", OngController_1.OngController.create);
routes.get("/profile", ProfileController_1.ProfileController.index);
routes.get("/incidents", IncidentController_1.IncidentController.index);
routes.post("/incidents", IncidentController_1.IncidentController.create);
routes.delete("/incidents/:id", IncidentController_1.IncidentController.exclude);
