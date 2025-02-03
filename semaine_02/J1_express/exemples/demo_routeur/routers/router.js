import { Router } from "express";
import express from "express" // => express.Router();

const router = Router();

// Page d'accueil
router.get("/", (req, res) => {
    res.status(200).send("Welcome Home")
})

// Page contact
router.get("/contact", (req, res)=> {
    res.status(200).send("Welcome to our contact page")
})


export default router;