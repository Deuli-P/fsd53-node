const http = require("http");
require("dotenv").config();

const server = http.createServer((req, res) => {

    // Gestion des routes
    // http://localhost:8000/login

    // Pour obtenir l'URL solicitée par l'utilisateur
    const url = req.url

    //Permet de gérerla recherche automatique des navigateurs de la route "/favicon.ico"
    if (url === "/favicon.ico") {
        res.writeHead(200, { "Content-Type": "image/x-icon" })

        res.end();
        return;
    }

    if (url === "/login") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        })

        const name = "John DOE"
        // On termine TOUJOURS le cycle de req/res par une response
        res.end(`
<!DOCTYPE html>
<html>
        <head>
            <meta charset="utf-8" />
            <title>Login Page </title>
        </head>
        <body>
            <h1> Test de la page login </h1>
            <p> Bonjour ${name} </p>
        </body>
</html>
        `)


    }

    // Page d'accueil
    if (url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        })
        res.end("Page d'accueil")
    }






});




// Choissisez un port entre 3000 et 9999
server.listen(process.env.PORT || 8000, process.env.HOSTNAME, () => {
    console.log(`Server is running at http://${process.env.HOSTNAME}:${process.env.PORT}`);

})