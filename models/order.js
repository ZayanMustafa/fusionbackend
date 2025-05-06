//  File : models/order.js

import mongoose from 'mongoose';





const orderSchema = new mongoose.Schema({

        name : {
            type : String,
            required : true    
        } ,
        email : {
            type : String,
            required : true    
        } ,
        phone : {
            type : String,
            required : true    
        } ,
        vin : {
            type : String,
            required : true    
        } ,
        model : {
            type : String,
            required : true    
        } ,
        year : {
            type : String,
            required : true    
        } ,
        // order : {
        //     type : String,
        //     required : true    
        // } 

 })


//  Create a model (DataBase) according to schema at MongoDB , Here is the name is OrderReport of model that show in MongoDB 
 const OrderReport = mongoose.model("OrderReport" , orderSchema)

 export default OrderReport













