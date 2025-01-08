const { readFileSync } = require("fs");
const http = require("http");
require("dotenv").config();

const { PORT, HOSTNAME } = process.env

const students = [
    { name: "Sonia" },
    { name: "Antoine" }
];
const server = http.createServer((req, res) => {

    const url = req.url

    // Pour la gestion du CSS
    if (url === "/bootstrap") {

        res.writeHead(200, { "Content-Type": "text/css" })
        try {
            const css = readFileSync("./assets/css/bootstrap.min.css");
            // Pour envoyer via un flux
            res.write(css);
            res.end()
        } catch (err) {
            res.writeHead(404, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ error: "Erreur lors de la lecture du fichier" }))
        }
    }

    // La page d'accueil
    if (url === "/" && req.method === "GET") {
        try {
            const home = readFileSync("./view/home.html");
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(home)


        } catch (err) {
            res.writeHead(404, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ error: "Une erreur est survenue" }))
        }
        return;
    }

    if (url === "/" && req.method === "POST") {
        let body = "";
        req.on("data", chunk => {
            body += chunk;
        })

        req.on("end", () => {

            console.log(body); // => name=Pommes
            const name = body.toString().split(/=/).pop() // Pommes

            if (name) students.push({ name })

            console.log(students);


            // 301 indique une redirection permanente
            res.writeHead(301, { location: `http://localhost:8000/users` })
            res.end()

        })
        return;
    }

    if (url === "/users") {
        res.writeHead(200, { "Content-Type": "text/html" });

        let users = `<ul>`
        for (const {name} of students) {
            users += `<li>${name} </li>`
        }
        users += `</ul>`

        res.end(`
            <!DOCTYPE html>
                <html>
                    <head>
                        <title>Utilisateurs </title>
                    </head>
                    <body>
                        ${users}
                    </body>
                </html>
            `)
    }


})


server.listen(PORT || 8000, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);

})