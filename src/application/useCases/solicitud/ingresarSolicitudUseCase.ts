import { Solicitud } from '../../../domain/entities/solicitud'
import { SolicitudRepository } from '../../../domain/repositories/solicitudRepository'

export class IngresarSolicitudUseCase {
  constructor (
    private readonly solicitudRepository: SolicitudRepository
  ) {}

  async execute (solicitud: Solicitud): Promise<void> {
    await this.solicitudRepository.ingresarSolicitud(solicitud)
  }
}
