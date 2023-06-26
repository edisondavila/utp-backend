// src/infrastructure/repositories/postgresUsuarioRepository.ts

import { AuthRepository } from '../../../domain/repositories/authRepository'
import { query } from './db'

export class AuthRepositoryImpl implements AuthRepository {
  async validarCredenciales (usuario: string, contraseña: string): Promise<Boolean | null> {
    // console.log('entra a la funcion')
    const { rows } = await query(
      'SELECT codigo, nombre, apePaterno, apeMaterno, correo, contrasena, rol FROM usuario WHERE correo = $1 AND contrasena = $2',
      [usuario, contraseña]
    )
    // console.log('los rows = ', rows)
    if (rows.length === 0) {
      return false
    }
    return true
  }
}
