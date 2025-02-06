import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

dotenv.config();
const app = express();






// Connexion à la base de données
connectDB();


app.listen(8000, () => {
console.log('Server is running at http://localhost:8000');

})
