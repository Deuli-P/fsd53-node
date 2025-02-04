import { Router } from "express";
import { contactPage, homePage } from "../controllers/homeController.js";
// import express from "express" // => express.Router();

const router = Router();

// Page d'accueil
router.get("/",homePage )

// Page contact
router.get("/contact", contactPage)


export default router;