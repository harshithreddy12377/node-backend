import {showProducts} from "../controllers/productController.js";
import express from "express";
const router = express.Router();
router.get("/", showProducts);
export default router;
