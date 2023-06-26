export interface Solicitud {
  codigo: number
  codEvaluacionUsuario: number
  archivo: string // Almacenar el archivo en formato Base64
  nota: number
  estado: number
}
