
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { CursoRepositoryImpl } from '../../../infrastructure/database/postgres/cursoRepositoriesImpl'
import { authenticateToken } from '../../../application/utils/authUtils'
import { CursoController } from '../../../application/controllers/cursoController'
import { ListarCursosUseCase } from '../../../application/useCases/curso/listarCursosUseCase'

const router = express.Router()
const cursoRepositoryImpl = new CursoRepositoryImpl()

const listarCursosUseCase = new ListarCursosUseCase(cursoRepositoryImpl)
const cursoController = new CursoController(listarCursosUseCase)

router.get('/', authenticateToken, async (req, res) => await cursoController.listarCursos(req, res))
export default router
