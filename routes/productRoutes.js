import express from "express"

import { deleteProduct, getProduct, getProductById,updatePrice,addProduct} from "../controllers/productcontroller.js"
const router=express.Router()

router.route("/").get(getProduct)
router.route("/:id").get(getProductById)
router.route("/:id").patch(updatePrice)
router.route("/:id").delete(deleteProduct)
router.route("/").post(addProduct)

export default router