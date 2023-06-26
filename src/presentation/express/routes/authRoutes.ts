/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { AuthController } from '../../../application/controllers/authController'
import { LoginUseCase } from '../../../application/useCases/auth/loginUseCase'
import { AuthRepositoryImpl } from '../../../infrastructure/database/postgres/authRepositoriesImpl'
import { AuthService } from '../../../application/services/authService'

const router = express.Router()
const authRepositoryImpl = new AuthRepositoryImpl()

const authService = new AuthService()
const loginUseCase = new LoginUseCase(authRepositoryImpl, authService)
const authController = new AuthController(loginUseCase)

// Ruta para el inicio de sesión
router.post('/login', async (req, res) => await authController.login(req, res))

export default router
