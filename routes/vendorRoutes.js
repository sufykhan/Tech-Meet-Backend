import express from "express"

import { deleteVendor, getVendor, getVendorById,updateVendor,addVendor} from "../controllers/vendorcontroller.js"
const router=express.Router()

router.route("/").get(getVendor)
router.route("/:id").get(getVendorById)
router.route("/:id").patch(updateVendor)
router.route("/:id").delete(deleteVendor)
router.route("/").post(addVendor)

export default router