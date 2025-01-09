const http = require("http");
const pug = require("pug")
require("dotenv").config();

const { PORT, HOSTNAME } = process.env
const loggedUser = {
    name: {
        first: 'Jean',
        last: 'Dupont',
    },
    age: 36,
    birthdate: new Date('1986-04-18'),
    location: {
        zipcode: '77420',
        city: 'Champs-sur-Marne',
    },
    isAdmin: true
};
const server = http.createServer((req, res) => {


    // Avec compileFile
    try {

        const compile = pug.compileFile("./views/template.pug");
        const data = compile({ loggedUser })
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