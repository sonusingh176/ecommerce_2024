import { products } from "../db.js";

import  Product  from "../models/productSchema.js";

//Mongoose provide a set of methods(create, find, save,findByIdAndUpdate...etc) that allow you to perform CRUD. 

export const getAllProduct = async (req, res, next) => {
  const allprod = await Product.find();
  //console.log(allprod);
  res.json({ product: allprod });
};

export const getProductById = async function (req, res, next) {
  //jab data url ke through send hota hai , to usko params me store krte hai
  // const paramValue=req.params;
  // console.log(paramValue.a);

  //destructuring
  const { id } = req.params;
  try{
    const product = await Product.findById(id);
    res.json(product);

  }catch(error){
    next(error);

  }

};

export const createNewProduct = async function (req, res, next) {
  //accept data from client to server , in request body
  const newProduct = req.body;

  try {
    //product create krne pr error aane ke chanse hai,isliye ise try-catch me rakha.
    //Mongoose provide a set of methods(create, find, save,findByIdAndUpdate...etc) that allow you to perform CRUD. 
    //create and save a new document in a single step.
    const createprod = await Product.create(newProduct);

    //send data from server to client
    res.json({
      product: createprod,
    });

  } catch (error) {
    
    next(error);
  }

};

export const updateProduct = async function (req, res, next) {

  const { id } = req.params;
  console.log(id);
  const updateProduct = req.body;

  const prodUpdate = await Product.findByIdAndUpdate(id, updateProduct);

  res.json({ messge: "product updated" });
};

export const deleteProduct = function (req, res, next) {
  //jab data query string ke form me receive hota hai to. isko query me receive krte hai
  const receivedQueryString = req.query;

  console.log(receivedQueryString);

  res.json({ messge: "delete function called" });
};
