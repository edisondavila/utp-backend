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
exports.EvaluacionesController = void 0;
class EvaluacionesController {
    constructor(listarEvaluacionesUseCase, listarNotasUseCase) {
        this.listarEvaluacionesUseCase = listarEvaluacionesUseCase;
        this.listarNotasUseCase = listarNotasUseCase;
    }
    listarEvaluaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codCurso } = req.params;
            try {
                const evaluaciones = yield this.listarEvaluacionesUseCase.execute(codCurso);
                res.status(200).json({ evaluaciones });
            }
            catch (error) {
                res.status(401).json({ error: error.message });
            }
        });
    }
    listarNotas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codEvaluacion } = req.params;
            try {
                const notas = yield this.listarNotasUseCase.execute(codEvaluacion);
                res.status(200).json({ notas });
            }
            catch (error) {
                res.status(401).json({ error: error.message });
            }
        });
    }
}
exports.EvaluacionesController = EvaluacionesController;
