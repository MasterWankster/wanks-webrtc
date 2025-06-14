// index.js
import express from 'express'
import http from 'http'
import WebSocket from 'ws'
import { setupWSConnection } from 'y-webrtc/bin/utils.js'

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req)
})

const PORT = process.env.PORT || 4444
server.listen(PORT, () => {
  console.log(`✨ Wanks Signaling Server is SLAYING on port ${PORT}`)
})
