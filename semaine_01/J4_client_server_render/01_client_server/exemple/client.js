const http = require("http");

// Pour envoyer une requête vers votre serveur

http.get(`http://localhost:8000`, res => {
    let data = "";

    // On va récuper le Buffer du serveur
    res.on("data", chunk => {
        console.log(chunk.toString());
        data += chunk;
    })

    res.on("end", () => console.log(data));
});