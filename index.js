const express = require("express");
const app = express();
const UserModel = require("./src/models/userModel.js");
const connectDB = require("./src/db.js")
const port = 8000;

app.use(express.json());

connectDB();

//Created
app.get("/",  (_req, res) => {
    task = {
        id: 20,
        title: "Cocinar",
        description: "Preparar la cena",
        completed: false
    }
    const db = async () => {
        const db = await UserModel.create(task); 
        res.json(db); 
        return db;   
    }
    db();    
});

//Read
app.get("/tasks/:id",  (req, res) => {
    const id = req.params.id;
    const task = async () => {       
        const db = await UserModel.findOne({"id" : id});  
        res.json(db);
        return db;
    }  
    task();  
});

//Updated
app.get("/updated/:id", (req, res) => {
    const id = req.params.id;
    const task = async () => {
        const db = await UserModel.updateOne({"id" : id}, {"title": "Hornear"} )
        res.json(db);
        return db;
    }
    task();
});

//Delete
app.get("/deleted/:id", (req, res) => {
    const id = req.params.id;
    const task = async () => {
        const db = await UserModel.deleteOne({"id" : id})
        res.json(db);
        return db;
    }
    task();
});


app.listen(port, () => {
    console.log(`Server listening in port ${port}`)
});