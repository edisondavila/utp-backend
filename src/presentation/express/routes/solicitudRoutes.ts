
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { SolicitudRepositoryImpl } from '../../../infrastructure/database/postgres/solicitudRepositoriesImpl'
import { authenticateToken } from '../../../application/utils/authUtils'
import { SolicitudController } from '../../../application/controllers/solicitudController'
import { IngresarSolicitudUseCase } from '../../../application/useCases/solicitud/ingresarSolicitudUseCase'

const router = express.Router()
const solicitudRepositoryImpl = new SolicitudRepositoryImpl()

const ingresarSolicitudUseCase = new IngresarSolicitudUseCase(solicitudRepositoryImpl)
const solicitudController = new SolicitudController(ingresarSolicitudUseCase)

router.post('/', authenticateToken, async (req, res) => await solicitudController.ingresarSolicitud(req, res))
export default router
