import  express  from 'express';

const router=express.Router();

import { 
    getAllProduct,
    getProductById ,
    createNewProduct,
    updateProduct,
    deleteProduct
 } from '../controller/productController.js';

 router.route('/products').get(getAllProduct);//method chaining
 router.route('/product/:id/').get(getProductById);
 router.route('/new/product').post(createNewProduct);
 router.route('/update/:id').put(updateProduct);
 router.route('/delete/:id').delete(deleteProduct);


export default router