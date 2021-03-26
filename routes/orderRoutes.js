import express from "express"
import { addOrder, deleteOrder, getOrder } from "../controllers/ordercontroller.js"

const router=express.Router()

router.route("/").post(addOrder)
router.route("/").get(getOrder)
router.route("/:id").delete(deleteOrder)
export default router