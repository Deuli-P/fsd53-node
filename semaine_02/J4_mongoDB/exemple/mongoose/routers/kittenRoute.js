import {Router} from "express";
import { addKitten, getAllKittens } from "../controllers/kittenController.js";

const kittenRouter = Router();

kittenRouter.get("/kittens", getAllKittens) // kebab-case
kittenRouter.post("/kittens/new", addKitten)

export default kittenRouter;