import { Request, Response } from 'express'
import { ListarCursosUseCase } from '../useCases/curso/listarCursosUseCase'

export class CursoController {
  constructor (private readonly listarCursosUseCase: ListarCursosUseCase) {}

  async listarCursos (req: Request, res: Response): Promise<void> {
    // console.log(req.body)
    const { usuario } = req.body

    try {
      const cursos = await this.listarCursosUseCase.execute(usuario)
      res.status(200).json({ cursos })
    } catch (error: any) {
      res.status(401).json({ error: error.message })
    }
  }
}
