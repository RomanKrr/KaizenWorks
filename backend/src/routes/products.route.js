import express from "express"
import { getProduct, getProductsByCategory } from "../controllers/product.controller.js";

const router = express.Router()

router.get("/category/:category", getProductsByCategory);
router.get("/productPage/:productId", getProduct);
export default router;