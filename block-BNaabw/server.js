var express=require('express');
var querystring=require('querystring');
var logger=require('morgan');
var cookieParser=require('cookie-parser');
var app=express();

app.use(logger('dev'));
app.use(cookieParser());

app.use((req,res,next)=>{
    res.cookie("count",1);
    next();
});

app.use((req,res,next)=>{
    console.log(req.cookies);
    next();
})

app.use(express.static(__dirname+'/public'));

app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html');
});

app.get('/blog',(req,res)=>{
    res.sendFile(__dirname+'/blog.html');
});

app.get('/cases',(req,res)=>{
    res.sendFile(__dirname+'/cases.html');
});

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/contact.html');
});

app.get('/service',(req,res)=>{
    res.sendFile(__dirname+'/services.html');
});

app.post('/form',(req,res)=>{
    // var query=querystring.parse(req.url);
    // console.log(query);
    console.log(req.body);
});

console.log(__dirname+'/public');

app.listen(4000,()=>console.log('Server listening on port 4000'));
