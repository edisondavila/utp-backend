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
exports.LoginUseCase = void 0;
class LoginUseCase {
    constructor(authRepository, authService) {
        this.authRepository = authRepository;
        this.authService = authService;
    }
    execute(usuario, contraseña) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioValido = yield this.authRepository.validarCredenciales(usuario, contraseña);
            if (usuarioValido == null) {
                throw new Error('Credenciales inválidas');
            }
            const token = this.authService.generarToken({ usuario });
            return token;
        });
    }
}
exports.LoginUseCase = LoginUseCase;
