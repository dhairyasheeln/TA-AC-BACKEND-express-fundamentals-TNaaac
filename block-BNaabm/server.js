var express=require('express');
var app=express();

function logger(req,res,next){
    console.log(req.url,req.method);
    next();
}

app.use("/",logger)

app.get('/',(req,res)=>{
    res.send('Welcome to  home page');
})


app.listen(4000,()=>{console.log('Server listening on port 4000')});