
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { EvaluacionesRepositoryImpl } from '../../../infrastructure/database/postgres/evaluacionesRepositoriesImpl'
import { authenticateToken } from '../../../application/utils/authUtils'
import { EvaluacionesController } from '../../../application/controllers/evaluacionesController'
import { ListarEvaluacionesUseCase } from '../../../application/useCases/evaluaciones/listarEvaluacionesUseCase'
import { ListarNotasUseCase } from '../../../application/useCases/evaluaciones/listarNotasUseCase'

const router = express.Router()
const evaluacionesRepositoryImpl = new EvaluacionesRepositoryImpl()

const listarEvaluacionesUseCase = new ListarEvaluacionesUseCase(evaluacionesRepositoryImpl)
const listarNotasUseCase = new ListarNotasUseCase(evaluacionesRepositoryImpl)

const evaluacionesController = new EvaluacionesController(listarEvaluacionesUseCase, listarNotasUseCase)

router.get('/:codCurso', authenticateToken, async (req, res) => await evaluacionesController.listarEvaluaciones(req, res))
router.get('/notas/:codEvaluacion', authenticateToken, async (req, res) => await evaluacionesController.listarNotas(req, res))

export default router
