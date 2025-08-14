import express from 'express';
const app=express();

app.get('/',(req,res)=>{
    res.send("this si the first message from express")
})
app.get('/mani',(req,res)=>{
    res.send("this si the first message from mani shankar")
})

app.listen(3000,()=>{
    console.log("server listening on port 3000");
})