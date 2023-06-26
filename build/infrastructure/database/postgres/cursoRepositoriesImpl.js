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
exports.CursoRepositoryImpl = void 0;
const db_1 = require("./db");
class CursoRepositoryImpl {
    listarCursos(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log('entra a la funcion')
            const { rows } = yield (0, db_1.query)(`SELECT c.codigo, c.nombre_curso, c.codDocente
      FROM curso c
      JOIN usuario u ON c.codDocente = u.codigo
      WHERE u.correo = $1
      AND u.rol = 1`, [usuario]);
            // console.log('los rows = ', rows)
            if (rows.length === 0) {
                return null;
            }
            return rows;
        });
    }
}
exports.CursoRepositoryImpl = CursoRepositoryImpl;
