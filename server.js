import express from "express"
// import products from "./data/products.js"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import vendorRoutes from "./routes/vendorRoutes.js"
import customerRoutes from "./routes/customerRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const app=express()

connectDB();

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("API is running hmmm....")
})

app.use("/api/products",productRoutes)
app.use("/api/vendors",vendorRoutes)
app.use("/api/customers",customerRoutes)
app.use("/api/orders",orderRoutes)

const PORT=process.env.PORT || 5000
app.listen(5000,console.log(`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`))