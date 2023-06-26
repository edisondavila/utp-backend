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
exports.SolicitudController = void 0;
class SolicitudController {
    constructor(ingresarSolicitudUseCase) {
        this.ingresarSolicitudUseCase = ingresarSolicitudUseCase;
    }
    ingresarSolicitud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('el body: ', req.body);
            const { solicitud } = req.body;
            console.log('solicitud: ', solicitud);
            try {
                yield this.ingresarSolicitudUseCase.execute(solicitud);
                res.status(200).json({ mensaje: 'Ingreso de solicitud Correcto' });
            }
            catch (error) {
                res.status(401).json({ error: error.message });
            }
        });
    }
}
exports.SolicitudController = SolicitudController;
