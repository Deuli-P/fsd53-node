import express from "express";
import { existsSync, readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Chemin absolu pour les fichiers statiques
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware pour gérer les URLs vers les fichiers statiques se trouvant dans le dossier /public/
app.use(express.static(path.join(__dirname, 'public')));


// ROUTE : Page d'accueil
// =======================
app.get("/", (req, res) => {
    // Construire le chemin absolu vers 'kittens.json' qui se trouve dans le dossier data
    const fileToRead = path.join(__dirname, 'data', 'kittens.json');

    // Lire le fichier 'kittens.json' de façon synchrone
    const kittens = JSON.parse(readFileSync(fileToRead, "utf-8"));

    let kittensHTML = "";
    for (const { id, name, image } of kittens) {
        //Le fait de décomposer directement dans la boucle for, m'évite de faire:
        // kitten.id; kitten.name; kitten.image
        kittensHTML += `

    <div class="kitten">
    <img src="/images/${image}" alt="Photo de ${name}" />
    <a href="/kitten/${id}">${name} </a>
    </div>

`

    }

    // Je renvoie la page complète au client
    res.status(200).send(`

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8"/>
            <title> Kittens - Liste de chatons </title>
            <link rel="stylesheet" href="/css/styles.css" type="text/css">
        </head>
        <body>
            <div class="container">
                <nav>
                    <ul>
                        <li>  Kittens </li>
                        <li> <a href="/"> Home </a> </li>
                    </ul>
                </nav>
            </div>
            <div class="container">
                ${kittensHTML}
            </div>
        </body>
    </html>

    `)

})


// ROUTE : Afficher UN seul chaton
// =======================
app.get("/kitten/:id", (req, res) => {
    // Qui dit ":id" dit paramètre dynamique = req.params;
    const { id } = req.params;

    // Construire le chemin absolu vers "<id>.json"
    const fileToRead = path.join(__dirname, "data", `${id}.json`);

    // On va vérifier que l'ID est bien numérique ou que le fichier existe
    if (isNaN(id) || !existsSync(fileToRead)) {
        return res.status(404).send(`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8"/>
            <title> Kittens - Ressource introuvable </title>
            <link rel="stylesheet" href="/css/styles.css" type="text/css">
        </head>
        <body>
            <div class="container">
                <nav>
                    <ul>
                        <li>  Kittens </li>
                        <li> <a href="/"> Home </a> </li>
                    </ul>
                </nav>
            </div>
            <div class="container">
                <p>Erreur 404 : La ressource demandée n'existe pas, veuillez revenir à l'accueil</p>
            </div>
        </body>
    </html>`)
    }

    const kitten = JSON.parse(readFileSync(fileToRead, "utf-8"));

    const { name, image, description, age } = kitten;

    res.status(200).send(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8"/>
                <title> Kittens - ${name} </title>
                <link rel="stylesheet" href="/css/styles.css" type="text/css">
            </head>
            <body>
                <div class="container">
                    <nav>
                        <ul>
                            <li>  Kittens </li>
                            <li> <a href="/"> Home </a> </li>
                        </ul>
                    </nav>
                </div>
                <div class="container">
                    <article>
                        <h2>${name}</h2>
                        <p>Age: ${age} ans </p>
                        <p>${description} </p>
                        <img src="/images/${image}" alt="Photo de ${name}"
                    </article>
                </div>
            </body>
        </html>
        `)

})

app.listen(8000, () => {

    console.log(`Server is running at http://localhost:8000`);

});