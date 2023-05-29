
const express=require('express')
const app=express()
app.listen(8000,()=>{console.log('hello world')})
app.get('/hello',(req,res)=>{res.send('hello world')})