import express from "express"

import { deleteCustomer, getCustomer, getCustomerById,updateCustomer,addCustomer} from "../controllers/customercontroller.js"
const router=express.Router()

router.route("/").get(getCustomer)
router.route("/:id").get(getCustomerById)
router.route("/:id").patch(updateCustomer)
router.route("/:id").delete(deleteCustomer)
router.route("/").post(addCustomer)

export default router