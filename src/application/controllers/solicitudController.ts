import { Request, Response } from 'express'
import { IngresarSolicitudUseCase } from '../useCases/solicitud/ingresarSolicitudUseCase'

export class SolicitudController {
  constructor (private readonly ingresarSolicitudUseCase: IngresarSolicitudUseCase) {}

  async ingresarSolicitud (req: Request, res: Response): Promise<void> {
    console.log('el body: ', req.body)
    const { solicitud } = req.body
    console.log('solicitud: ', solicitud)
    try {
      await this.ingresarSolicitudUseCase.execute(solicitud)
      res.status(200).json({ mensaje: 'Ingreso de solicitud Correcto' })
    } catch (error: any) {
      res.status(401).json({ error: error.message })
    }
  }
}
