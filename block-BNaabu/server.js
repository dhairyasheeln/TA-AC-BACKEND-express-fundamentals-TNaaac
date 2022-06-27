var express=require('express');
var app=express();

app.use((req,res,next)=>{
    if(req.url==='/admin'){
        return next('Unauthorized');
    }
    next();
})

app.get('/',(req,res,next)=>{
    res.send('Index Page');
});

app.get('/about',(req,res,next)=>{
    res.send('about Page');
});

app.use((req,res,next)=>{
    res.send('Page not found!');
});

app.use((err,req,res)=>{
    res.send(err);
});

app.listen(3400,()=>console.log('Server listening on port 3400'));
