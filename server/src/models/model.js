const mongoose = require('mongoose');

const schema=mongoose.Schema(
    {
        img:String,
        name:String,
        price:Number,
        year:String,
        format:String,
        time:String,
        reytingCount:Number
    },
    {
        collection:"Movies",
        timestamps:true
    }
)
const Movies=mongoose.model("Movies",schema)
module.exports=Movies