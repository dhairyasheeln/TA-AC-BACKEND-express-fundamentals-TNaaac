var express=require('express');
var fs=require('fs');
var app=express();

function logger(req,res,next){
    var date=new Date();
    console.log(req.method,req.url,date);
    next();
}

app.use(logger);

function customExpress(req,res,next){
    var store='';
    req.on('data',(chunk)=>{
        store=store+chunk;
    });

    req.on('end',()=>{
        var parsedData=JSON.parse(store);
        req.body=parsedData;
    })
    next();
}

app.use(customExpress);

function customStatic(req,res,next){
    var url=req.url;
    console.log(url);
    var absolutePath=__dirname+'/public'+url;
    console.log(absolutePath);
    res.sendFile(absolutePath);
    // next();
}

app.use(customStatic);

// app.get('/:media',(req,res)=>{
//     var media=req.params.media;
//     var absolutePath=__dirname+'/public/'+media;
//     console.log(absolutePath);
// })


// app.post('/json',(req,res)=>{
//     console.log(req.body);
// });

app.listen(3700,()=>console.log('Server listening on port 3700'));