import jwt from 'jsonwebtoken'

export class AuthService {
  secretKey = 'EdisonDavilaCamposBackendRetoUTP12345678'
  generarToken = (payload: any): string => {
    const token = jwt.sign(payload, this.secretKey, { expiresIn: '1h' })
    return token
  }

  verifyToken = (token: string): any => {
    const decoded = jwt.verify(token, this.secretKey)
    return decoded
  }
}
