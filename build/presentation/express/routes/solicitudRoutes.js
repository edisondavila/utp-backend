"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const solicitudRepositoriesImpl_1 = require("../../../infrastructure/database/postgres/solicitudRepositoriesImpl");
const authUtils_1 = require("../../../application/utils/authUtils");
const solicitudController_1 = require("../../../application/controllers/solicitudController");
const ingresarSolicitudUseCase_1 = require("../../../application/useCases/solicitud/ingresarSolicitudUseCase");
const router = express_1.default.Router();
const solicitudRepositoryImpl = new solicitudRepositoriesImpl_1.SolicitudRepositoryImpl();
const ingresarSolicitudUseCase = new ingresarSolicitudUseCase_1.IngresarSolicitudUseCase(solicitudRepositoryImpl);
const solicitudController = new solicitudController_1.SolicitudController(ingresarSolicitudUseCase);
router.post('/', authUtils_1.authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield solicitudController.ingresarSolicitud(req, res); }));
exports.default = router;
