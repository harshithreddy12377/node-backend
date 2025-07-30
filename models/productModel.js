import mongoose from "mongoose";
<<<<<<< HEAD
const productSchema=new mongoose.Schema({
    name:{type:String},
    desc:{type:String},
    price:{type:Number},
    url:{type:String}
});
=======
const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    desc: { type: String },
    price: { type: Number },
    
    url: { type: String },
  },
  {
    timestamps: true,
  }
);

>>>>>>> 4928f42dfc3d330cf90c7e63b20c2532709481f3
export default mongoose.model("Product", productSchema);
