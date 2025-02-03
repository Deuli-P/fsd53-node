// const http = require("http");  // Import CommonJS | À ne pas utiliser
import http from "http"; // ESModule; ne pas oublier d'ajouter =>"type": "module"
// import { number } from "./utils.js";
import { sayByeBye, sayHello, number } from "./utils.js";
// import sayHello from "./utils.js";
const server = http.createServer();

console.log(sayHello());

server.listen(8000, () => {
    console.log("Server is running");

})