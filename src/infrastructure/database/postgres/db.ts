import { Pool } from 'pg'

export const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'dataBaseUTP',
  password: 'andrea1960',
  port: 5432
})

// Función para ejecutar consultas en la base de datos
export const query = async (text: string, params?: any[]): Promise<any> => {
  const client = await pool.connect()
  try {
    return await client.query(text, params)
  } finally {
    client.release()
  }
}
