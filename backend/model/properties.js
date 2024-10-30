import mongoose from "mongoose";

const propertSchema = new mongoose.Schema(
    {
    name:{
        type:string,
        required:true
       },
       Desc:{
        type:string,
        required:true
       },
       location:{
        type:string,
        required:true
       },
       square_footage:{
        type:String,
        required:true
       },
       bedrooms:{
        type:Number,
        required:true
       },
       bethrooms:{
        type:Number,
        required:true
       },
       features:{
        type:String,
        required:true
       },
       image_url:{
        type:String,
        required:true
       }
    },
    {
        timestamps:true
    }
);

const Propert = mongoose.model('properts',propertSchema)
export default Propert