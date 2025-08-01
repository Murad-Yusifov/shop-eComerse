import { Router } from "express";
import { getProduct, postProduct } from "../controllers/product.js";

const router = Router()

router
.get("/product", getProduct)
.post("/product", postProduct)

export default router