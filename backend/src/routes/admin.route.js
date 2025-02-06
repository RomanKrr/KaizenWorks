import express from "express"
import { createProduct, deleteProduct, getAllProducts } from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/createProduct", createProduct);
router.get("/getAllProducts", getAllProducts);
router.delete("/:id", deleteProduct);

export default router;