import { Request, Response, NextFunction } from 'express'
import { AuthService } from '../services/authService'

const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  // console.log(req.headers)
  const token = req.headers.authorization?.split(' ')[0]
  const authService = new AuthService()
  if (token == null) {
    res.status(401).json({ error: 'No se proporcionó un token de autenticación' })
    return
  }

  try {
    const decoded = authService.verifyToken(token)
    // console.log('el decoded : ', decoded)
    req.body.usuario = decoded.usuario
    next()
  } catch (error: any) {
    res.status(401).json({ error: 'Token inválido' })
  }
}

export { authenticateToken }
