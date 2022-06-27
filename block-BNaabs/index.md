writeCode

Create a basic express server and add routes:-

- Add a GET request on '/' route and render 'index.html' file using `res.sendFile`.
    app.get('/',(req,res)=>{
        res.sendFile('./index.html')
    })
- Add a GET request on '/new' route and render new.html with a html form.
    app.get('/new',(req,res)=>{
        res.sendFile('./new.html')
    })
- add a post request on '/new' route and display submitted form data
 app.post('/new',(req,res)=>{
        var query=req.query;
        res.send(query);
    })
- add a route with params to grab request made on `/users/1234` or `/users/asdf`
app.post('/users/:username',(req,res)=>{
    var username=req.params.username;
    res.send(username);
})
