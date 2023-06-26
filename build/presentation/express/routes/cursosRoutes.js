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
const cursoRepositoriesImpl_1 = require("../../../infrastructure/database/postgres/cursoRepositoriesImpl");
const authUtils_1 = require("../../../application/utils/authUtils");
const cursoController_1 = require("../../../application/controllers/cursoController");
const listarCursosUseCase_1 = require("../../../application/useCases/curso/listarCursosUseCase");
const router = express_1.default.Router();
const cursoRepositoryImpl = new cursoRepositoriesImpl_1.CursoRepositoryImpl();
const listarCursosUseCase = new listarCursosUseCase_1.ListarCursosUseCase(cursoRepositoryImpl);
const cursoController = new cursoController_1.CursoController(listarCursosUseCase);
router.get('/', authUtils_1.authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield cursoController.listarCursos(req, res); }));
exports.default = router;
