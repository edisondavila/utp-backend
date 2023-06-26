import { AuthRepository } from '../../../domain/repositories/authRepository'
import { AuthService } from '../../services/authService'

export class LoginUseCase {
  constructor (
    private readonly authRepository: AuthRepository,
    private readonly authService: AuthService
  ) {}

  async execute (usuario: string, contraseña: string): Promise<string> {
    const usuarioValido = await this.authRepository.validarCredenciales(usuario, contraseña)
    if (usuarioValido == null) {
      throw new Error('Credenciales inválidas')
    }

    const token = this.authService.generarToken({ usuario })
    return token
  }
}
