// import { Usuario } from '../entities/usuario';

export interface AuthRepository {
  validarCredenciales: (usuario: string, contraseña: string) => Promise<Boolean | null>
}
