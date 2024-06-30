const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();  // Add this line to load environment variables

const app = express();
app.use(express.json());
app.use(cors());

const usersModel=require('../server/src/models/Users')

//doteenv
require('dotenv').config()
const port = process.env.PORT || 3000

//db
require("./src/config/db")

//bodyparse
const bodyParser = require('body-parser')
app.use(bodyParser.json())

//router
const router=require("./src/router/router")
app.use('/',router)



const url = process.env.MONGODB_URL;
if (!url) {
  console.error('MONGODB_URL is not defined in your environment variables.');
  process.exit(1);
}

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB", err);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  usersModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success"); 
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json("Server error");
    });
});


app.post('/register',(req,res)=>{
  usersModel.create(req.body)
  .then(users=>res.json(users))
  .catch(err=>res.json(err))
})

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})