// src/infrastructure/repositories/postgresUsuarioRepository.ts

import { Evaluaciones_Persona } from '../../../domain/entities/evaluacion-persona'
import { Evaluaciones } from '../../../domain/entities/evaluaciones'
import { EvaluacionesRepository } from '../../../domain/repositories/evaluacionesRepository'
import { query } from './db'

export class EvaluacionesRepositoryImpl implements EvaluacionesRepository {
  async listarEvaluaciones (codCurso: string): Promise<Evaluaciones[] | null> {
    // console.log('entra a la funcion')
    const { rows } = await query(
      `select codigo, codCurso, nombre_evaluacion 
      from evaluaciones
      where codCurso = $1`,
      [codCurso]
    )
    // console.log('los rows = ', rows)
    if (rows.length === 0) {
      return null
    }
    return rows
  }

  async listarNotas (codEvaluacion: string): Promise<Evaluaciones_Persona[] | null> {
    // console.log('entra a la funcion listarNotas')
    const { rows } = await query(
      `SELECT ep.codigo, ep.codEvaluacion, ep.codUsuario, u.nombre, u.apePaterno, u.apeMaterno, ep.nota, sr.estado
      FROM evaluacion_persona ep
      JOIN usuario u ON ep.codUsuario = u.codigo
      LEFT JOIN solicitud_rectificacion sr
      ON sr.codevaluacionusuario = ep.codigo
      WHERE ep.codEvaluacion = $1
      AND u.rol = 2`,
      [codEvaluacion]
    )
    // console.log('los rows = ', rows)
    if (rows.length === 0) {
      return null
    }
    return rows
  }
}
