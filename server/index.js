const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const URL="mongodb+srv://praveenmariappan:6yofKQ1XHOxFSjFe@cluster0.drrmffl.mongodb.net/test"
mongoose.connect(URL,{})
const schema=mongoose.Schema(
{
    starcount: Number,
    review: String,
});
const det = mongoose.model("users",schema)
app.post('/',(req,res)=>{
    const star=req.body.star;
    const text=req.body.text;
    const v=new det({
        starcount: star,
        review: text,
    })
    v.save().then(()=>res.json("Success")).catch(error=>res.json("Failure"));
})

app.listen(9000,()=>{
    console.log("server is running");
})
