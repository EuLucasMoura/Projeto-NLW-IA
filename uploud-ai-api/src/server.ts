import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { prisma } from './lib/prisma'
import { getAllPromptsRoutes } from './routes/get-all-prompts'
import { uploudVideoRoute } from './routes/uploud-video'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateIACompletionRoute } from './routes/generate-ia-completion'

const app = fastify()

app.register(fastifyCors, {
    origin: '*',
})

app.register(getAllPromptsRoutes)
app.register(uploudVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateIACompletionRoute)

app.listen({
    port: 3333,
}).then(() => {
    console.log('🚀 HTTP Server Running on localhost:3333 ! 🚀')
})