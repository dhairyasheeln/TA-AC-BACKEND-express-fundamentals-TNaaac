var express=require('express');
var app=express();


function logger(req,res,next){
    console.log(req.method,req.url);
    next();
}

app.use("/",logger);

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname+'/public'));

app.post('/json',(req,res)=>{
    console.log(req.body);
});

app.post('/contact',(req,res)=>{
    console.log(req.body);
})

app.listen(3000,()=>console.log('Server listening on port 3000'));
