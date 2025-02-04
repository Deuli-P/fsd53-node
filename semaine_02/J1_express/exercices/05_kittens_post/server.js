import express from "express";
import path from "path";
import kittensRouter from "./routers/kittensRouter.js";
import { fileURLToPath } from "url";

const app = express();

// Chemin absolu pour les fichiers statiques
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware pour gérer les URLs vers les fichiers statiques se trouvant dans le dossier /public/
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(kittensRouter)
app.get("/*", (req, res) => {

    res.status(404).send("Page introuvable, merci de revenir à l'accueil");
})

app.listen(8000, () => {

    console.log(`Server is running at http://localhost:8000`);

});