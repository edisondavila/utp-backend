// src/infrastructure/repositories/postgresUsuarioRepository.ts

import { Curso } from '../../../domain/entities/curso'
import { CursoRepository } from '../../../domain/repositories/cursoRepository'
import { query } from './db'

export class CursoRepositoryImpl implements CursoRepository {
  async listarCursos (usuario: string): Promise<Curso[] | null> {
    // console.log('entra a la funcion')
    const { rows } = await query(
      `SELECT c.codigo, c.nombre_curso, c.codDocente
      FROM curso c
      JOIN usuario u ON c.codDocente = u.codigo
      WHERE u.correo = $1
      AND u.rol = 1`,
      [usuario]
    )
    // console.log('los rows = ', rows)
    if (rows.length === 0) {
      return null
    }
    return rows
  }
}
