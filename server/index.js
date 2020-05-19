const express = require('express')
const app = express()
const ctr1 = require("./controllers/messages_controller")

app.use(express.json())

const SERVER_PORT = 3001

app.post('/api/messages', ctr1.createMessage)
app.get('/api/messages', ctr1.readMessage)
app.put('/api/messages/:message_id', ctr1.updateMessage)
app.delete('/api/messages/:message_id', ctr1.deleteMessage)

app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`))