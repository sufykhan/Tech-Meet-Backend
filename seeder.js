import dotenv from "dotenv"
import products from "./data/products.js"
import vendors from "./data/vendors.js"
import customers from "./data/customers.js"
import Vendor from "./models/vendorModel.js"
import Product from "./models/productModel.js"
import Customer from "./models/customerModel.js"
import connectDB from "./config/db.js"
import Order from "./models/orderModel.js"

dotenv.config();
connectDB();
const importData = async () => {
  try {
    await Product.deleteMany();
    await Customer.deleteMany();
    await Vendor.deleteMany();
    await Order.deleteMany();
    await Product.insertMany(products);
    await Customer.insertMany(customers);
    await Vendor.insertMany(vendors);
    console.log(`DB connected and imported`);
  } catch(error){
    console.log(`${error}`);
    process.exit()
  }

};

const destroyData = async () => {
    try {
      // await Product.deleteMany();
      // await Vendor.deleteMany();
      await Customer.deleteMany();
      console.log(`DB connected and imported`);
    } catch(error) {
      console.log(`${error}`);
      process.exit(1)
    }
  };
  
if(process.argv[2]==="-d"){
    destroyData();
}
else{
    importData();
}