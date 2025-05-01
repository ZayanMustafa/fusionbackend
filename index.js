import express from 'express';
import authRouter from './routes/auth.js';  
import vinRouter from './routes/vin.js';
import allOrderRouter from './routes/allorder.js';
import singleOrderRouter from './routes/allorder.js';
import mongoose from 'mongoose';
import cors from 'cors'

var corsOptions = {
    origin: 'https://fussionreport.vercel.app',
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

// Auth Api
// app.use("/auth", authRouter);  

// Vin Api
app.use("/vin", vinRouter);


// All Order API
// app.use("/allorder", allOrderRouter);


// Single Order API
// app.use("/order", singleOrderRouter);









































//==========================================================                      //GET Method             ==============================================================
// Simple URL request
// app.get('/' , (req , res) => {
//     res.send('Hello World')
// })
// simple Data URL request
// app.get('/data' , (req , res)=>{
//     console.log('Data URL request')
//     res.send('Hello There! this is just data URL request, we are going to build a REST API')
// })
// Dynamic Path
// app.get('/data/:id' , (req , res)=>{
//     console.log(req.params.id)
//     res.send(`Hello Data , Here we are going to build a REST API ${req.params.id}`)
// })
// Query String 
// app.get('/data' , (req , res)=>{
//     console.log(req.query.name)
//     res.send(`Hello ${req.query.name}, Here I am going to build a REST API jpw`)
// })
// ============================================================== 
// POST Method Routes 
// ==============================================================
// Simple POST endpoint
// app.post('/submit', (req, res) => {
//     console.log('Post Method', req.body.name);
//     const age = req.body.age * 5;
//     res.send(`Hello Post Method ${age}`);
// });
// Students data
// const studentsData = [
//     { id: 1, name: 'Hasan', age: 18, course: 'MERN' },
//     { id: 2, name: 'Ali', age: 20, course: 'Marketing' },
//     { id: 3, name: 'Hassan', age: 17, course: 'Graphic' },
//     { id: 4, name: 'Hussain', age: 16, course: 'Web' },
//     { id: 5, name: 'Hussain', age: 19, course: 'MERN' },
//     { id: 6, name: 'Hussain', age: 19, course: 'MERN' },
//     { id: 7, name: 'Hussain', age: 19, course: 'MERN' },
//     { id: 8, name: 'Hussain', age: 19, course: 'MERN' },
//     { id: 9, name: 'Hussain', age: 19, course: 'MERN' },
//     { id: 10, name: 'Hussain', age: 19, course: 'MERN' },
// ];

// Middleware to validate student ID
// const validate = (req, res, next) => {
//     const id = req.body.id;
//     if (!id) {
//         return res.status(400).send('ID is required');
//     }
//     if (id > 10 || id < 1 || isNaN(id)) {
//         return res.status(404).send('Student Not in Database');
//     }
//     next();
// };

// POST endpoint to get student by ID
// app.post('/getstudents', validate, (req, res) => {
//     const id = req.body.id;
//     const student = studentsData.filter(elem => elem.id == id);
//     console.log(student);
//     return res.status(200).json(student);
// });

