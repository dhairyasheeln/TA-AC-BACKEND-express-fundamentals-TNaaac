var express=require('express');
var log=require('morgan');
var cookieParser=require('cookie-parser')

var app=express();

function logger(req,res,next){
    console.log('Custom Logger:  '+req.method,req.url);
    next();
}

app.use('/',logger);

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname+'/public'));

app.use(log());

app.use(cookieParser());

app.use('/about',(req,res,next)=>{
    res.cookie("username","Suraj");
    next();
});

app.use((req,res)=>{
    res.send(req.cookies);
})

app.post('/json',(req,res)=>{
    res.send(req.body);
});

app.post('/form',(req,res)=>{
    res.send(req.body);
});

app.get('/home',(req,res)=>{
    res.send('Home Page');
});

app.listen(3500,()=>console.log('Server listening on port 3500'));