import express from 'express'
import authRouter from './presentation/express/routes/authRoutes'
import cursoRouter from './presentation/express/routes/cursosRoutes'
import evaluacionesRouter from './presentation/express/routes/evaluacionesRoutes'
import solicitudRouter from './presentation/express/routes/solicitudRoutes'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()

// Configuración del límite de tamaño
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
// Configura CORS
app.use(cors())

app.use(express.json())

const PORT = 3000

app.use('/api/auth', authRouter)
app.use('/api/curso', cursoRouter)
app.use('/api/evaluaciones', evaluacionesRouter)
app.use('/api/solicitud', solicitudRouter)

app.listen(PORT, () => {
  console.log(`Server runnung on port ${PORT}`)
})
