import { Evaluaciones } from '../entities/evaluaciones'
import { Evaluaciones_Persona } from '../entities/evaluacion-persona'
export interface EvaluacionesRepository {
  listarEvaluaciones: (codCurso: string) => Promise<Evaluaciones[] | null>
  listarNotas: (codEvaluacion: string) => Promise<Evaluaciones_Persona[] | null>
}
