import express from "express";
const router = express.Router();

// All Order API
const orders = [
    {
        orderId: 1,
        vin: "1HGCM82633A123456",
        email: "user1@email.com",
        model: "Honda Accord",
        status: "Pending",
        date: "2023-10-01",
        amount: 20000,
    },
    {
        orderId: 2,
        vin: "1HGCM82633A654321",
        email: "user2@email.com",
        model: "Toyota Camry",  
        status: "Shipped",
        date: "2023-10-02",
        amount: 22000,
    },
    {
        orderId: 3,
        vin: "1HGCM82633A789012",
        email: "user3@email.com",
        model: "Ford Focus",
        status: "Delivered",
        date: "2023-10-03",
        amount: 18000,
    },
    {
        orderId: 4,
        vin: "1HGCM82633A345678",
        email: "user4@email.com",
        model: "Chevrolet Malibu",
        status: "Cancelled",
        date: "2023-10-04",
        amount: 21000,
    }]

// All Order API
    router.get('/', (req, res) => {
        res.status(200).json(orders);
        res.end(orders);
    }
    );

// Single Order API
    router.get('/:id', (req, res) => {
        const orderId = req.params.id;
        const order = orders.find(order => order.orderId == orderId);
        if (order) {
            res.status(200).json(order);
            res.end(order);
        } else {
            res.status(404).send('Order Not Found');
            res.end('Order Not Found');
        }
    })


    export default router;