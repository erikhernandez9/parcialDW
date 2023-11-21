import express from 'express'
import empresasRouter from './routes/cards'
import personasRouter from './routes/personas' // Fixed import statement


const app = express()
app.use(express.json()) //middleware

const PORT = 3000

app.use('/api/empresas', empresasRouter)
app.use('/api/personas', personasRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
