import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono from node with release-please!')
})

app.get('/info', (c) => {
  return c.json({
    name: 'release-please-test',
    description: 'This is a test repository for how to use Release Please.',
  })
})


serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}!!!`)
})
