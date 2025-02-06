import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import kittenRouter from "./routers/kittenRoute.js";

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Connexion à la base de données
connectDB();

app.use(kittenRouter)


app.listen(8000, () => {
console.log('Server is running at http://localhost:8000');

})
