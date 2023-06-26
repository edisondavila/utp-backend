import { Solicitud } from '../entities/solicitud'

export interface SolicitudRepository {
  ingresarSolicitud: (solicitud: Solicitud) => Promise<void>
}
