import { Curso } from '../../../domain/entities/curso'
import { CursoRepository } from '../../../domain/repositories/cursoRepository'

export class ListarCursosUseCase {
  constructor (
    private readonly cursoRepository: CursoRepository
  ) {}

  async execute (usuario: string): Promise<Curso[]> {
    const cursos = await this.cursoRepository.listarCursos(usuario)
    if (cursos == null) {
      throw new Error('Cursos no Asignados')
    }
    return cursos
  }
}
