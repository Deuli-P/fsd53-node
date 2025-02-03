import express from "express";
import { existsSync, readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
//  J'importe mon router
import router from "./routers/router.js";

const app = express();
// Chemin absolu pour les fichiers statiques
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Middleware pour gérer les URLs vers les fichiers statiques se trouvant dans le dossier /public/
app.use(express.static(path.join(__dirname, 'public')));


app.use(router)




app.listen(8000, () => {

    console.log(`Server is running at http://localhost:8000`);

});
