"use strict";
// src/infrastructure/repositories/postgresUsuarioRepository.ts
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
exports.SolicitudRepositoryImpl = void 0;
const db_1 = require("./db");
class SolicitudRepositoryImpl {
    ingresarSolicitud(solicitud) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entra a la funcion');
            console.log(solicitud);
            try {
                yield (0, db_1.query)(`INSERT INTO solicitud_rectificacion (codEvaluacionUsuario, archivo, nota, estado)
            VALUES ($1, $2, $3, '1');`, [solicitud.codEvaluacionUsuario, solicitud.archivo, solicitud.nota]);
                // console.log('todo bien')
            }
            catch (error) {
                console.log('el error :', error);
                throw new Error('Error al insertar la solicitud');
            }
        });
    }
}
exports.SolicitudRepositoryImpl = SolicitudRepositoryImpl;
