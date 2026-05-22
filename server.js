import http from 'node:http';
import { serveStatic } from './utils/serveStatic.js';

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer((req, res) => {
    serveStatic(req, res)
})

server.listen(PORT, () => console.log(`Server is running on ${PORT}`))