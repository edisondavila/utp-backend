import { Request, Response } from 'express'
import { ListarEvaluacionesUseCase } from '../useCases/evaluaciones/listarEvaluacionesUseCase'
import { ListarNotasUseCase } from '../useCases/evaluaciones/listarNotasUseCase'

export class EvaluacionesController {
  constructor (private readonly listarEvaluacionesUseCase: ListarEvaluacionesUseCase,
    private readonly listarNotasUseCase: ListarNotasUseCase) {}

  async listarEvaluaciones (req: Request, res: Response): Promise<void> {
    const { codCurso } = req.params

    try {
      const evaluaciones = await this.listarEvaluacionesUseCase.execute(codCurso)
      res.status(200).json({ evaluaciones })
    } catch (error: any) {
      res.status(401).json({ error: error.message })
    }
  }

  async listarNotas (req: Request, res: Response): Promise<void> {
    const { codEvaluacion } = req.params

    try {
      const notas = await this.listarNotasUseCase.execute(codEvaluacion)
      res.status(200).json({ notas })
    } catch (error: any) {
      res.status(401).json({ error: error.message })
    }
  }
}
