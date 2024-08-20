const express = require('express');
const path = require('path');
const app = express();


//setup static and middleware
app.use(express.static('./public'));

// app.get('/',(req, res)=>{
//     console.log('user hit the resource');
//     res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'));

//adding to static assests
//SSR - server sync rendering
// });

app.get('/about',(req,res)=>{
    res.status(200).send('About Page');
    res.end();
})

app.all('*',(req, res)=>{
    res.status(404).send('<h1>resource not found</h1>');

})

app.listen(5000,()=>{
    console.log("server is listening on port 5000")
}); 

//app.get = read data
//app.post = insert data
//app.put = update data
//app.delete = delete data
//app.all = cover all http verbs (get, post, etc)
//app.use
//app.listen