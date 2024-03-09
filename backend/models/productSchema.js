import mongoose from "mongoose";

const { Schema } =mongoose; //destructure the mongoose  object and extract the 'Schema'

const productSchema = new Schema({
    
        "model" :{
            required:[true,'Provide Model'],
            type:String,
            unique: true,

        },   
        "name": {
            required:[true,'Please Provide the name'],
            type:String,
            maxLength:[20, 'Name should have atleast 8 character'],
            minLength:[10, 'Name should have atleast 20 character']
        },
        "price": {
            type:Number,
            required:[true ,'Provide Price'],
            min:[50000 ,'minimum price should be 50000'],
            max:[60000 ,'maximum price should be 60000'],
        },
        "category": String,
        "brand": String,
        "stock": Number,
        "image":[
            {
                url:String,
                size:{
                    type:Number
                }
            }
        ],
        "specification": {
          "ram": String,
          "processor": String,
          "size": String,
          "os": String,
          "graphics": String,
          "Battery Life": String,
          "storage": String,
          "Ports": String,
          "software": String,
        },
        "rating":{
            count:{type:Number},
            rating:{
                type:Number,
                min:[1,'min 1 is allowed'],
                max:[5 ,'max 5 is allowed'],
            }
        }
      
})

//create the Product model based on the schema
const Product = mongoose.model('product' ,productSchema);

export default Product;

/**
 * In The context of Mongoose and MongoDB , a model serves as a way to interact with a specific collection in the databse.
 * 
 */