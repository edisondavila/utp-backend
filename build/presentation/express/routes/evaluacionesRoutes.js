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
const evaluacionesRepositoriesImpl_1 = require("../../../infrastructure/database/postgres/evaluacionesRepositoriesImpl");
const authUtils_1 = require("../../../application/utils/authUtils");
const evaluacionesController_1 = require("../../../application/controllers/evaluacionesController");
const listarEvaluacionesUseCase_1 = require("../../../application/useCases/evaluaciones/listarEvaluacionesUseCase");
const listarNotasUseCase_1 = require("../../../application/useCases/evaluaciones/listarNotasUseCase");
const router = express_1.default.Router();
const evaluacionesRepositoryImpl = new evaluacionesRepositoriesImpl_1.EvaluacionesRepositoryImpl();
const listarEvaluacionesUseCase = new listarEvaluacionesUseCase_1.ListarEvaluacionesUseCase(evaluacionesRepositoryImpl);
const listarNotasUseCase = new listarNotasUseCase_1.ListarNotasUseCase(evaluacionesRepositoryImpl);
const evaluacionesController = new evaluacionesController_1.EvaluacionesController(listarEvaluacionesUseCase, listarNotasUseCase);
router.get('/:codCurso', authUtils_1.authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield evaluacionesController.listarEvaluaciones(req, res); }));
router.get('/notas/:codEvaluacion', authUtils_1.authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield evaluacionesController.listarNotas(req, res); }));
exports.default = router;
