import http from 'node:http';

const PORT = 8000

const server = http.createServer((req, res) => {
    
})

server.listen(PORT, () => console.log(`Server is running on ${PORT}`))