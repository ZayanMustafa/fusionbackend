




// import VinReport from "../models/vin.js";

// export const vinController = async (req , res)=>{

//  just getting the data from request body

// const fullName = req.body.fullName;
// const vin = req.body.vin;
// const model = req.body.model;
// const year = req.body.year;

//  check if vin already exit 
// const vinExists = await VinReport.findOne({
//  first backend second mera apna frontend 
// vin 

// vin : vin
// })

// if(vinExists){


//     return res.json({
//         sucess : false , 
//         message : "VIN already exist",
//     })
// }

// const report = new VinReport({
//     fullName , vin , model , year 
// }) 

//     await report.save()
//     return res.json({
//         sucess : true , 
//         message : "Your data has been saved",
//         report
//     })

// }



// For data fetching
// export const FetchData = async (req, res) => {

//     const reports = await VinReport.find()

//     return res.json({
//         sucess: true,
//         message: "Your data has been fetch",
//         reports
//     })

// }