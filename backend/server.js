import express, { json, response } from "express";
import bodyParser from "body-parser";
import { connectDB } from "./config/config.js";
import productRoutes from "./routes/productRoutes.js";
import {errorMiddleware} from "./middleware/errorMiddleware.js"
import 'dotenv/config'

const app = express();
connectDB();

app.use(bodyParser.json());
//routes mounting 
app.use("/api", productRoutes);

//Define error-handling Middleware at the last. after other app.use() and routes call.
//error-handling middleware function have 4 argumnets.
//golable error handling middleware
app.use(errorMiddleware);

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server is listening at port 8000");
});
