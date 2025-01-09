const http = require("http");
const pug = require("pug");
require("dotenv").config();

const { PORT, HOSTNAME } = process.env;

// const template = `

// if age >= 18
//     h1 Access granted!
// else
//     h1 Permission denied!

// `
const server = http.createServer((req, res) => {

    // Lié au template directement dans une variable
    // const compileTemplate = pug.compile(template)
    // const result = compileTemplate({age: 9})

    // Quand on a un fichier .pug pour le compiler

    const data = {
        name: "Seyedpouya",
        age: 59,
        gender: "M",
        isAdmin: false,

    }
    try {
        const compileTemplate = pug.compileFile("./views/demo.pug")
        const result = compileTemplate(data)
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(result)
    } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain" })
        res.end(err.message)

    }



    // Version avec le render
    // pug.render(template, { age: 14 }, (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    //     res.writeHead(200, { "Content-Type": "text/html" })
    //     res.end(data)
    // })

    // pour render un fichier
    // pug.renderFile("./views/template.pug", { age: 15 }, (err, data) => {
    //     if (err) {
    //         res.writeHead(500, { "Content-Type": "text/plain" })
    //         res.end(err.message)
    //     }
    //     res.writeHead(200, { "Content-Type": "text/html" })
    //     res.end(data)
    // })

})








server.listen(PORT || 8000, HOSTNAME, () => {

    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);

})