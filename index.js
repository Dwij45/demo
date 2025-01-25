const  express = require('express')
const app = express()
const port = 3000
app.use(express.json())

const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')
const {UserModel, TodoModel} =require("./db")
// UseModel and TodoModel has been imported // !capitals


const JWT_SECRET = "s3cret";
mongoose.connect("mongodb+srv://gosaidwij045:KXmLCZCJGMNGuAag@cluster0.pmdcs.mongodb.net/todo-practise22")


app.post("/signup", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    
// 
    await UserModel.create({
        email: email,
        password: password,
        name: name
    });
    
    res.json({
        message: "You are signed up"
    })
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password,
    });

    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        },JWT_SECRET)

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// && once you run the server first database/ schema will be created in mongo db, then we send requests and then data will be inserted in db
