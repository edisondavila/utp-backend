"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const authService_1 = require("../services/authService");
const authenticateToken = (req, res, next) => {
    var _a;
    // console.log(req.headers)
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[0];
    const authService = new authService_1.AuthService();
    if (token == null) {
        res.status(401).json({ error: 'No se proporcionó un token de autenticación' });
        return;
    }
    try {
        const decoded = authService.verifyToken(token);
        // console.log('el decoded : ', decoded)
        req.body.usuario = decoded.usuario;
        next();
    }
    catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
};
exports.authenticateToken = authenticateToken;
