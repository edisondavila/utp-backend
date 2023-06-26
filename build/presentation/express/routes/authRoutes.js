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
const authController_1 = require("../../../application/controllers/authController");
const loginUseCase_1 = require("../../../application/useCases/auth/loginUseCase");
const authRepositoriesImpl_1 = require("../../../infrastructure/database/postgres/authRepositoriesImpl");
const authService_1 = require("../../../application/services/authService");
const router = express_1.default.Router();
const authRepositoryImpl = new authRepositoriesImpl_1.AuthRepositoryImpl();
const authService = new authService_1.AuthService();
const loginUseCase = new loginUseCase_1.LoginUseCase(authRepositoryImpl, authService);
const authController = new authController_1.AuthController(loginUseCase);
// Ruta para el inicio de sesión
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield authController.login(req, res); }));
exports.default = router;
