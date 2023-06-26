import { Curso } from '../entities/curso'

export interface CursoRepository {
  listarCursos: (usuario: string) => Promise<Curso[] | null>
}
