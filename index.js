import express from 'express';
import vinRouter from './routes/vin.js';
import orderRouter from './routes/order.js';
import mongoose from 'mongoose';
import cors from 'cors'

var corsOptions = {
    origin: [
        "http://localhost:3000" , "https://fussionreport.vercel.app"
    ] ,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


const app = express();
const port = process.env.PORT || 5000;

//  Mongo db ke sath connect kar deya
try {
    
    await mongoose.connect("mongodb+srv://muzammil:muzammil@cluster0.5ozicp4.mongodb.net/fussion?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Mongo DB connected")

} catch (error) {
    
    
    console.log(error)
}


app.use(cors(corsOptions))
app.use(express.json());




app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on port http://localhost:${port}`);
    }
});


// Vin Api
app.use("/vin", vinRouter);




// Get Order API
app.use("/order", orderRouter)



