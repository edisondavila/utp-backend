"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthService {
    constructor() {
        this.secretKey = 'EdisonDavilaCamposBackendRetoUTP12345678';
        this.generarToken = (payload) => {
            const token = jsonwebtoken_1.default.sign(payload, this.secretKey, { expiresIn: '1h' });
            return token;
        };
        this.verifyToken = (token) => {
            const decoded = jsonwebtoken_1.default.verify(token, this.secretKey);
            return decoded;
        };
    }
}
exports.AuthService = AuthService;
