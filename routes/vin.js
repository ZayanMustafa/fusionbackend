import express from 'express';
import { FetchData, vinController } from '../controller/vin.js';
const router = express.Router();



// VIN API
router.post('/' , vinController)


router.get('/admin' , FetchData )

export default router;



