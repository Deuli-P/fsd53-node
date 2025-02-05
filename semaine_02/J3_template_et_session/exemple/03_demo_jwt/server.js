import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
// ==========
// App initialization
// ==========
dotenv.config();


const hostname = 'localhost';
const port = 8000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// ==========
// App middlewares
// ==========

app.use(express.static(path.join(__dirname, "public")));

// ==========
// App routes
// ==========

app.get("/", (req, res) => {

  const user = {
    name: "Laura",
    id: 450,
    role: "admin"
  }

  // Créer un token
  const token = jwt.sign(
    user, // Correspond au payload,les informations que l'on veut stocker dans le token
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES
    }
  )

  // req.session.token = token // via la session (faut installer express-session)
  // res.cookie = token

res.status(200).json(token)

});

app.get("/check", (req, res) => {

// Le token se trouve dans notre cas dans l'en-tête de la requête SI et SEULEMENT si on l'a défini en ...

let authToken = req.headers.authorization
const token = authToken && authToken.split(" ")[1];

console.log(token);
// S'il n'y a pas de token, cela signifie que l'utilisateur n'est pas authentifié
if(!token){
  return res.status(401).json({message: "Veuillez vous authentifier"})
}

const verifToken = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

  if (err) {
    return res.status(403).json({message: "Token invalide !", err})
  }

  console.log(decoded);
  // const user = User.findById(decoded.id) // Une connexion avec une BDD
  res.status(200).json({message: "Vous êtes bien connecté; bienvenue " + decoded.name})
})


})


// ==========
// App start
// ==========

app.listen(port, () => {
  console.log(`App listening at http://${hostname}:${port}`);
});
