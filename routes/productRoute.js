<<<<<<< HEAD
import {showProducts} from "../controllers/productController.js";
import express from "express";
const router = express.Router();
router.get("/", showProducts);
=======
import { showProducts,deleteProduct,updateProduct,createproduct } from "../controllers/productController.js";
import express from "express";
const router = express.Router();
router.get("/showproducts", showProducts);
router.delete("/deleteproduct/:id",deleteProduct)
router.patch("/updateproduct/:id",updateProduct)
router.post("/createproduct",createproduct)
>>>>>>> 4928f42dfc3d330cf90c7e63b20c2532709481f3
export default router;
