//  File : controller/order.js

import OrderReport from "../models/order.js";


export const orderController = async (req , res)=>{

    const { name, email, phone, vin, model, year } = req.body;



    const order = new  OrderReport({
        name , email , phone , vin , model , year 
    })
    
    await order.save()

    return res.json({
        success : true , 
        message : "Your order has been placed",
        order
    })

}






//  For get order data
export const getOrderController = async( req , res ) =>{


    const orders = await OrderReport.find()


    return res.json({
        sucess : true , 
        message : "Fetch All orders",
        orders
    })


}