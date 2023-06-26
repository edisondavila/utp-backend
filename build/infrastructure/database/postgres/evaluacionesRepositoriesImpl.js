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
exports.EvaluacionesRepositoryImpl = void 0;
const db_1 = require("./db");
class EvaluacionesRepositoryImpl {
    listarEvaluaciones(codCurso) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log('entra a la funcion')
            const { rows } = yield (0, db_1.query)(`select codigo, codCurso, nombre_evaluacion 
      from evaluaciones
      where codCurso = $1`, [codCurso]);
            // console.log('los rows = ', rows)
            if (rows.length === 0) {
                return null;
            }
            return rows;
        });
    }
    listarNotas(codEvaluacion) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log('entra a la funcion listarNotas')
            const { rows } = yield (0, db_1.query)(`SELECT ep.codigo, ep.codEvaluacion, ep.codUsuario, u.nombre, u.apePaterno, u.apeMaterno, ep.nota, sr.estado
      FROM evaluacion_persona ep
      JOIN usuario u ON ep.codUsuario = u.codigo
      LEFT JOIN solicitud_rectificacion sr
      ON sr.codevaluacionusuario = ep.codigo
      WHERE ep.codEvaluacion = $1
      AND u.rol = 2`, [codEvaluacion]);
            // console.log('los rows = ', rows)
            if (rows.length === 0) {
                return null;
            }
            return rows;
        });
    }
}
exports.EvaluacionesRepositoryImpl = EvaluacionesRepositoryImpl;
