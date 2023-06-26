// src/infrastructure/repositories/postgresUsuarioRepository.ts

import { Solicitud } from '../../../domain/entities/solicitud'
import { SolicitudRepository } from '../../../domain/repositories/solicitudRepository'
import { query } from './db'

export class SolicitudRepositoryImpl implements SolicitudRepository {
  async ingresarSolicitud (solicitud: Solicitud): Promise<void> {
    console.log('entra a la funcion')
    console.log(solicitud)
    try {
      await query(
            `INSERT INTO solicitud_rectificacion (codEvaluacionUsuario, archivo, nota, estado)
            VALUES ($1, $2, $3, '1');`,
            [solicitud.codEvaluacionUsuario, solicitud.archivo, solicitud.nota]
      )
      // console.log('todo bien')
    } catch (error) {
      console.log('el error :', error)
      throw new Error('Error al insertar la solicitud')
    }
  }
}
