import express from 'express';
import { signupuser, loginuser } from './controller/controller.js';
import { getproductbyid, getproducts } from './controller/productcontroller.js';







const route = express.Router();

route.post('/signup', signupuser);
route.post('/login', loginuser);
route.get('/products', getproducts);
route.get('/product/:id', getproductbyid)

export default route;