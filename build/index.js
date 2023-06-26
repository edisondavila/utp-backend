"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./presentation/express/routes/authRoutes"));
const cursosRoutes_1 = __importDefault(require("./presentation/express/routes/cursosRoutes"));
const evaluacionesRoutes_1 = __importDefault(require("./presentation/express/routes/evaluacionesRoutes"));
const solicitudRoutes_1 = __importDefault(require("./presentation/express/routes/solicitudRoutes"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
// Configuración del límite de tamaño
app.use(body_parser_1.default.json({ limit: '10mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '10mb', extended: true }));
// Configura CORS
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = 3000;
app.use('/api/auth', authRoutes_1.default);
app.use('/api/curso', cursosRoutes_1.default);
app.use('/api/evaluaciones', evaluacionesRoutes_1.default);
app.use('/api/solicitud', solicitudRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server runnung on port ${PORT}`);
});
