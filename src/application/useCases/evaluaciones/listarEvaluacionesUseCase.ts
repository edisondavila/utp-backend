import { Evaluaciones } from '../../../domain/entities/evaluaciones'
import { EvaluacionesRepository } from '../../../domain/repositories/evaluacionesRepository'

export class ListarEvaluacionesUseCase {
  constructor (
    private readonly evaluacionesRepository: EvaluacionesRepository
  ) {}

  async execute (codCurso: string): Promise<Evaluaciones[] | null> {
    const evaluaciones = await this.evaluacionesRepository.listarEvaluaciones(codCurso)
    if (evaluaciones == null) {
      throw new Error('Evaluaciones no Asignadas')
    }
    return evaluaciones
  }
}
