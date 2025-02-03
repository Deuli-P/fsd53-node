import hello from "./utils/hello.js";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

console.log(hello("World !"));

// Création d'une 'application' express;
const app = express();
// Avec les ESModule je dois créer manuellement mon chemin absolu
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// console.log(__dirname);
const absolutePath = path.join(__dirname, "public")

// Gestion des fichiers statiques
app.use(express.static(absolutePath))

app.get("/home", (req, res) =>{

res.status(200).send("Welcome!");
})


app.get("/", (req, res) => {
    res.status(200).send(`
        <form action="/send" method="POST">
        <button type="submit">Envoyer</button>
        </form>`)
})

app.post("/send", (req, res) => {


    res.status(200).send("Formulaire bien reçu")
})

// Paramètre dynamique
// On utilise le signe ":"
app.get("/articles/:id", (req, res) => {

    const id = req.params.id

    res.status(200).send(`Bienvenue sur la page ${id}`)

})

// Paramètre de requête (query string)
app.get("/products", (req, res) => {
    //À utiliser dans l'URL de la requete http://localhost:8000/products?name=ordi&color=rouge
    // Le "?" sert de délimitter,name est la clé, ordi la valeur et le signe "&" délimite une nouvelle clé de l'objet
    console.log(req.query);

    res.status(200).send(req.query)

})

app.get("/*", (req, res) => {

    res.status(404).send("Page introuvable")
})


app.listen(8000, () => {
    console.log("Server is running !");

})