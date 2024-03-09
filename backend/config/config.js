import mongoose from "mongoose";
import 'dotenv/config'



/**
 * since, aap ka server ek alag application hai ,or database ek alag application hai. 
 * or hum yaha , apne server se request bahar alag application ko send kr rahe hai connection ke liye , 
 * ye request fail bhi ho sakti hai ya success bhi ho sakti hai . islye jis code me error aane ke chance ho usko try-catch me rakhte hai
 * or ye  request db connection ke liye bahar ja raha hai isle async-await . 
 */
export const connectDB = async ()=>{

    try {
        const res=await mongoose.connect(process.env.DB_URI);
        //console.log(res)
        console.log('Database Connected at port', res.connection.port);
       
        
    } catch (error) {
        console.log('connecction Failed', error);
        
    }
}
