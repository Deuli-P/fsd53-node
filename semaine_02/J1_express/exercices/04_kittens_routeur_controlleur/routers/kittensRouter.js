import { Router } from "express";
import { getOneKitten, home } from "../controllers/kittensController.js";

const kittensRouter = Router();

// /!\ Attention: Plus la route est longue, plus il faudra la placer en première instance
// Exemple: /kitten/:id/age/stats/user/  => Il faudra la mettre en premier lieu
// Exemple: /:id => Il vaudrait mieux la placer vers les dernières instances

// ROUTE : Afficher UN seul chaton
// =======================
kittensRouter.get("/kitten/:id/user", getOneKitten )

// ROUTE : Afficher UN seul chaton
// =======================
kittensRouter.get("/kitten/:id", getOneKitten )

// ROUTE : Page d'accueil
// =======================
kittensRouter.get("/", home)

export default  kittensRouter