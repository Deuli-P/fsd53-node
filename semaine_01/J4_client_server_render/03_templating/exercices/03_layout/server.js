const http = require("http");
const pug = require("pug")
require("dotenv").config();

const { PORT, HOSTNAME } = process.env
const menuItems = [
    { path: '/', title: 'Home', isActive: true },
    { path: '/about-me', title: 'About', isActive: false },
    { path: '/references', title: 'References', isActive: false },
    { path: '/contact-me', title: 'Contact', isActive: false },
];

const server = http.createServer((req, res) => {


    // Avec compileFile
    try {

        const compile = pug.compileFile("./views/index.pug");
        const data = compile({ menuItems })
        res.writeHead(200, {"Content-Type": "text/html; charset=utf8"})
        res.end(data)
    } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain" })
        res.end("Erreur lors de la compilation du fichier", err.message)
    }

    // // Avec renderFile

    // pug.renderFile("./views/template.pug", { loggedUser }, (err, data) => {
    //     if (err) {
    //         res.writeHead(500, { "Content-Type": "text/plain" })
    //         res.end("Erreur lors de la compilation du fichier", err.message)
    //     }

    //     res.writeHead(200, { "Content-Type": "text/html" })
    //     res.end(data)

    // })

})

server.listen(PORT || 8000, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);

})