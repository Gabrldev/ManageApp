import { Router } from "express";
import { LoginUser, RegisterUser } from "../controllers/UsersController.js";

const router = Router();

router.get("/register", RegisterUser)
router.get("/login", LoginUser)

export default router

