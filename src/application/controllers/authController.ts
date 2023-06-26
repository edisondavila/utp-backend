import { Request, Response } from 'express'
import { LoginUseCase } from '../useCases/auth/loginUseCase'

export class AuthController {
  constructor (private readonly loginUseCase: LoginUseCase) {}

  async login (req: Request, res: Response): Promise<void> {
    const { usuario, contraseña } = req.body

    try {
      const token = await this.loginUseCase.execute(usuario, contraseña)
      res.status(200).json({ token })
    } catch (error: any) {
      res.status(401).json({ error: error.message })
    }
  }
}
