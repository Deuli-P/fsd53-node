import express from "express";

const app = express();

// Pour convertir les données reçues au format JSON
app.use(express.json());

// Pour traiter les formulaire POST au format x-www-form-urlencoded
// Mais ne traite pas le multipart/form-data (input de type file) pour ça on utilise plus couramment "Multer"
// Ce middleware permet de créer un champ "req.body"
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) =>{

res.status(200).send(`

    <form action="/users" method="POST">
        <input type="text" name="username" />
        <input type="text" name="email" />
        <input type="number" name="age" />

        <button type="submit"> Envoyer </button>
    </form>

    `)


})

// Route pour traiter le formulaire
app.post("/users", (req, res) => {

// Pour sécuriser les inputs
const {username, age, email } = req.body
let parsedAge = parseInt(age)
if( username.trim() === "" ||
    email.trim() === "" ||
    parsedAge < 0  ||
    parsedAge > 120
){
    return res.status(400).send("Veuillez remplir tous les champs")
}

res.send("Formulaire bien reçu");


})





app.listen(8000, () => {

console.log("Server is running at http://localhost:8000");

})