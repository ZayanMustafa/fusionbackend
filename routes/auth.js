import express from 'express';
const router = express.Router();

// Register API
router.post('/register', (req, res) => {
    const { userName, email, password } = req.body;
    console.log("User Details Given by User", userName, email, password);
    res.status(200).send(`User Registered Successfully ${userName}`);
});


// Login API 
router.post('/login', (req, res) => {
    const { userName } = req.body;
    
    if (userName === "zayyanmustafa") {
        res.status(200).send(`User Login`);
    } else {
        res.status(404).send(`User Not Found`);
    }
});

export default router;  