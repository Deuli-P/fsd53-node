import mongoose from "mongoose";

// Création d'un schéma
const KittenSchemaV1 = new mongoose.Schema({

    name: String, // tous les types sont avec une lettre majuscule
    age: Number,
    image: String,
    date: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    role: String

})

// Version plus robuste
const KittenSchemaV2 = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 255,
        trim: true
    },
    age: {
        type: Number,
        min: 0,
        max: 30,
        required: true
    },
    image: {

        src: {
            type: String,
            required: true,
            default: "default-kitten.jpg"
        },
        alt: {
            type: String,
            required: true,
            default: "Image de chaton",
            maxLength: 255
        }
    },
    role: {
        type: String,
        lowercase: true,
        required: true,
        default: "kitten",
        enum: ["kitten", "admin", "super-kitten", "old-kitten"] // Liste des rôles autorisés
    },
// email:{
// type: String,
// lowercase: true,
// required: true,
// maxLength: 255,
// unique: true //Par exemple un seul utilisateur avec le mail "sam@sam.fr"
// }

}, {
timestamps: true, // Créé 3 nouveaux champs: createdAt; updatedAt; __v;
})

// Convertir le schéma en modele (Classe)
const KittenModel = mongoose.model("Kitten", KittenSchemaV2) // Merci de ne pas rajouter un "s" à la fin de votre collection il le fait tout seul


export default KittenModel;