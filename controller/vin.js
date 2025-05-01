import VinReport from "../model/vin.js";



export const vinController = async (req , res)=>{


    //  just getting the data from request body

    const fullName = req.body.fullName;
    const vin = req.body.vin;
    const model = req.body.model;
    const year = req.body.year;


    //  Import 
    const report = new VinReport({
        

        fullName , vin , model , year 
        
    }) 

    await report.save()


    return res.json({
        sucess : true , 
        message : "Your data has been saved",
        report
    })


}







export const FetchData = async ( req , res )=> {

        const reports = await VinReport.find()


        return res.json({
            sucess : true , 
            message : "Your data has been fetch",
            reports
        })

}