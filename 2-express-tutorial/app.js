const express = require('express');
const app = express();

//req=>middleware => res


//THIS IS VERY INEFFICIENT. MAKE A FUNCTION INSTEAD
// app.get('/',(req,res)=>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method,url,time);
//     res.send('Home');
// });

//this is middleware
const logger=(req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    next();
}

//express automatically passes app through middleware 'logger'
app.get('/',logger,(req,res)=>{
    
})
app.get('/about',logger, (req,res)=>{
    res.send('About');
})


app.listen(5000,()=>{
    console.log('server is running on port 5000...');
})