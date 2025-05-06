
// File: routes/order.js

import express from 'express';
import { getOrderController, orderController } from '../controller/order.js';
const router = express.Router();


// Post Order API
router.post('/' , orderController)




// Get Order API
router.get('/admin' , getOrderController) 

export default router;