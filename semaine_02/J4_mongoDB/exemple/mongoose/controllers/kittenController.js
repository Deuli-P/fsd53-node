import KittenModel from "../models/KittenModel.js"

export const getAllKittens = async (req, res) =>{

try {

    // Je vais aller interoger ma BDD pour récupérer tous les chatons
const kittens = await KittenModel.find()

res.status(200).json(kittens)

} catch (err) {

res.status(500).json({error: err.message})

}
}


export const addKitten = async (req, res) => {
try {

const {name, age, role, src, alt} = req.body;

// SECURITE DES DONNEES

const newKitten = new KittenModel({
name: req.body.name,
age: parseInt(age),
role,
image:{
    src,
    alt: req.body.alt
}
})

// Il faut sauvegarder en base de données le nouveau chaton
await newKitten.save()

res.status(200).json({message: "Nouveau chaton ajouté avec succès"})

} catch (err) {
res.status(500).json({message: "Impossible de créer le chaton", err:err.message})
}
}