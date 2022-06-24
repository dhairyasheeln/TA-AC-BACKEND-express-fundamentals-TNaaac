var express=require('express');
var app=express();

function logger(req,res,next){
    console.log(req.url,req.method);
    next();
}

app.use("/",logger);

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(express.static())

app.get('/',(req,res)=>{
    res.send('Welcome to  home page');
})

app.post('/json',(req,res)=>{
    console.log(req.body);
})


app.listen(4000,()=>{console.log('Server listening on port 4000')});