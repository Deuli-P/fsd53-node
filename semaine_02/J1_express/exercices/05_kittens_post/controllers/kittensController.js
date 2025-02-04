import { existsSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const home = (req, res) => {
    // Construire le chemin absolu vers 'kittens.json' qui se trouve dans le dossier data
    const fileToRead = path.join(__dirname, "..", 'data', 'kittens.json');

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
                        <li> <a href="/add"> Add </a> </li>
                    </ul>
                </nav>
            </div>
            <div class="container">
                ${kittensHTML}
            </div>
        </body>
    </html>

    `)

}

export const getOneKitten = (req, res) => {
    // Qui dit ":id" dit paramètre dynamique = req.params;
    const { id } = req.params;

    // Construire le chemin absolu vers "<id>.json"
    const fileToRead = path.join(__dirname, "..", "data", `${id}.json`);

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
                        <li> <a href="/add"> Add </a> </li>
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

}

export const formKitten = (req, res) => {



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
                            <li> <a href="/add"> Add </a> </li>
                        </ul>
                    </nav>
                </div>
                <div class="container">
                    <form action="/add" method="POST">
                    Nom: <input type="text" name="name" placeholder="Newton" /><br />
                    Age: <input type="number" name="age" placeholder="2" min="0" max="25"/><br />
                    Description: <input type="text" name="description" placeholder="My super kitten!" /><br />
                    Photo: <input type="text" name="image" placeholder="Lien de la photo" /><br />
                    <button type="submit"> Envoyer </button>
                    </form>
                </div>
            </body>
        </html>
        `)

}

export const addKitten = (req, res) => {

    // Je récupère les champs du formulaire
    const { name, age, image, description } = req.body;

    // SECURITE INPUTS

    // FIN SECURITE DES INPUTS

    // On va lire le fichier "kittens.json"
    const fileToRead = path.join(__dirname, "..", "data", "kittens.json");
    const kittens = JSON.parse(readFileSync(fileToRead, "utf-8"));
    // Je vais récupérer l'ID le plus grand du fichier et je rajoute +1
    const lastInsertId = Math.max(...kittens.map(k => k.id))
    const newId = lastInsertId + 1
    const newKitten = {
        id: newId,
        name,
        image,
        age: parseInt(age),
        description
    }

    try {

        // Ajouter un nouveau chaton au fichier "kittens.json"
        kittens.push(newKitten);
        writeFileSync(fileToRead, JSON.stringify(kittens, null, 4), "utf-8");

        // Création du fichier <id>.json avec le contenu du nouveau chaton
        const fileToCreate = path.join(__dirname, "..", "data", `${newId}.json`);
        writeFileSync(fileToCreate, JSON.stringify(newKitten, null, 4), "utf-8");

    } catch (err) {

        return res.status(500).send(`Erreur lors de l'ajout du chaton: ${err.message}`)

    }

    res.redirect("/")
}