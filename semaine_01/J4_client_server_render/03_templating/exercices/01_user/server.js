const http = require("http");
const pug = require("pug")
require("dotenv").config();

const { PORT, HOSTNAME } = process.env


const server = http.createServer((req, res) => {


    // Avec compileFile
    // try {

    //     const compile = pug.compileFile("./views/template.pug");
    //     const data = compile({ isAdmin: true })
    //     res.writeHead(200, {"Content-Type": "text/html"})
    //     res.end(data)
    // } catch (err) {
    //     res.writeHead(500, { "Content-Type": "text/plain" })
    //     res.end("Erreur lors de la compilation du fichier", err.message)
    // }

    // Avec renderFile

    pug.renderFile("./views/template.pug", { isAdmin: false }, (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" })
            res.end("Erreur lors de la compilation du fichier", err.message)
        }

        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(data)

    })

})

server.listen(PORT || 8000, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);

})