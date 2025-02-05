import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

// ==========
// App initialization
// ==========

const hostname = 'localhost';
const port = 8000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// ==========
// App middlewares
// ==========

app.use(express.static(path.join(__dirname, "public")));

// Veuillez commenter la ligne 23 pour tester le problème de CORS policy au lancement de l'application React
app.use(cors({
    origin: "http://localhost:5173" // Ne pas mettre le"/" à la fin de 5173 sinon ça ne fonctionne pas
}))

// ==========
// App routes
// ==========

app.get("/", (req, res) => {
  res.json({ message: "Salut Seyedpouya" });
});

// ==========
// App start
// ==========

app.listen(port, () => {
  console.log(`App listening at http://${hostname}:${port}`);
});
