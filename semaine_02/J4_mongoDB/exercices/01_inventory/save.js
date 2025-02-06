import dotenv from "dotenv";
import mongoose from "mongoose";
import productToInsert from "./Data/inventory.js"
import connectDB from "./config/database.js";
import { ProductModel } from "./models/ProductModel.js";

dotenv.config();

connectDB()


const load = async () => {

try {

// À l'initialisation, on va supprimer tous les produits
await ProductModel.deleteMany({});
console.log("Initialization with empty data done");
console.log("-----------------------------------");

// Insérer les produits en BDD
await ProductModel.insertMany(productToInsert)
console.log(`${productToInsert.length} products added`);
console.log("-----------------------------------");

// On va vérifier que les données existent bien en BDD
const companies = await ProductModel.find({}, {_id: 0, society: 1, price: 1, qty:1})
console.log("Companies:", companies);
console.log("-----------------------------------");


// On va mettre à jour tous les documents
await ProductModel.updateMany({}, {$mul: {qty: 10}})
console.log("Quantity multiply by 10");
console.log("-----------------------------------");


} catch (err) {
console.log(err);

}


}

load()