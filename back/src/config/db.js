const mongoose = require('mongoose');
require('dotenv').config()
const url=process.env.MONGODB_URL
mongoose.
    connect(url).then(() => {
    console.log('Connected!')}).
    catch((err)=>{
        console.log("err"+ err);
    })