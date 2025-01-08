const http = require("http");
const fs = require("fs");
require("dotenv").config();

const { PORT, HOSTNAME } = process.env

const server = http.createServer((req, res) => {

    const url = req.url

    // Route principale
    if(url === "/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(`
<!DOCTYPE html>
<html>
<head>
<title> Micro API: Students </title>
</head>
<body>
<h1> Bienvenue sur notre première API </h1>
<p> Liste des routes : </p>
<a href="/all"> Voir tous les utilisateurs </a>
<p> Pour voir un utilisateur un particulier => http://localhost:8000/search/[nom] </p>
</body>
</html>
            `)
            return;
    }

    if (url === "/all") {
        try {
            const fileJSON = JSON.parse(fs.readFileSync("./Data/all.json", "utf-8"))
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(fileJSON))
            return;
        } catch (err) {
            console.error(err);
            res.end(JSON.stringify({ message: 'Fichier introuvable' }))
        }
    }


    // Route /search/[Name_user]
    if (url.includes("search")) {

        // http://localhost:8000/search/alan
        const search = url.split("/").pop()
        // console.log(search);

        try {
            let fileJSON = JSON.parse(fs.readFileSync(`./Data/${search}.json`, "utf-8"))
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify(fileJSON))
            return;

        } catch (err) {
            res.writeHead(404, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ error: "Utilisateur introuvable" }))
            return;
        }

    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Page introuvable" }))



})



server.listen(PORT || 8000, HOSTNAME, () => {

    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);

})