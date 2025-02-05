import express from "express";
const router = express.Router();

import HomeController from "../controllers/homeController.js";
import DashboardController from "../controllers/dashboardController.js";
import Login from "../controllers/loginController.js";
import authMiddleware from "../middlewares/auth.js";
import LogoutController from "../controllers/logoutController.js";

router.get("/dashboard", authMiddleware, DashboardController)
router.post("/login", Login)
router.get("/", HomeController);
router.get("/logout", LogoutController)

export default router;
