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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
class AuthController {
    constructor(loginUseCase) {
        this.loginUseCase = loginUseCase;
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario, contraseña } = req.body;
            try {
                const token = yield this.loginUseCase.execute(usuario, contraseña);
                res.status(200).json({ token });
            }
            catch (error) {
                res.status(401).json({ error: error.message });
            }
        });
    }
}
exports.AuthController = AuthController;
