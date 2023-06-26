import { Evaluaciones_Persona } from '../../../domain/entities/evaluacion-persona'
import { EvaluacionesRepository } from '../../../domain/repositories/evaluacionesRepository'

export class ListarNotasUseCase {
  constructor (
    private readonly evaluacionesRepository: EvaluacionesRepository
  ) {}

  async execute (codEvaluacion: string): Promise<Evaluaciones_Persona[] | null> {
    const notas = await this.evaluacionesRepository.listarNotas(codEvaluacion)
    if (notas == null) {
      throw new Error('Evaluaciones no Asignadas')
    }
    return notas
  }
}
