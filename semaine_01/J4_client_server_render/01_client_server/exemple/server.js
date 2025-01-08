const http = require("http");

const server = http.createServer((req, res) => {

res.writeHead(200,{"Content-Type": "application/json"})

const message ={message: "Bonjour à tous !"}

res.end(JSON.stringify(message))

})

server.listen(8000, () => {
console.log(`http://localhost:8000`);

})