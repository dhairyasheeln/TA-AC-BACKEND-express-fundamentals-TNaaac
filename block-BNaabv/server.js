var express=require('express');
var logger=require('morgan');
var cookieParser=require('cookie-parser');
var app=express();

app.use(logger('dev'));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/json',(req,res)=>{
    res.send(req.body);
});

app.use((req,res,next)=>{
    var count=1;
    res.cookie("count",count);
    next();
});

app.use('/cookie',(req,res,next)=>{
    res.send(req.cookies);
    next();
});

app.use((req,res,next)=>{
    if(req.url==='/customError'){
        return next('Unauthorized');
    }
    next();
})

app.get('/',(req,res)=>{
    res.send(`<h2>Welcome to express</h2>`);
});

app.get('/about',(req,res)=>{
    res.send('My name is qwerty');
});

app.get('/users/:username',(req,res)=>{
    var username=req.params.username;
    res.send(`<h2>${username}</h2>`);
});

app.post('/form',(req,res)=>{
    res.json(req.body);
});

app.use((req,res,next)=>{
    res.send('Page not found!');
});




app.listen(3000,()=>console.log('Server listening on port 3000'));