import { Router } from "express";
import {
  deleteBills,
  getBills,
  postBills,
} from "../controllers/billController.js";

const router = Router();

router.get("/bills/:id", getBills);
router.post("/bills", postBills);
router.delete("/bills/:id", deleteBills);

export default router;
