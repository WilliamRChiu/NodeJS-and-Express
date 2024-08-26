const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('c:/Users/William/.vscode/Node_JS/2-express-tutorial/logger');
const authorize = require('c:/Users/William/.vscode/Node_JS/2-express-tutorial/authorize');


//req=>middleware => res


//THIS IS VERY INEFFICIENT. MAKE A FUNCTION INSTEAD
// app.get('/',(req,res)=>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method,url,time);
//     res.send('Home');
// });


//express automatically passes app through middleware 'logger'
//app.use([logger,authorize]); //this lets me use logger and authorize for any call to app object
app.use(logger);
app.use(morgan('tiny'));

//app.use('/api',logger);
//this uses logger for any path that references api


//note: order matters here!


app.get('/',(req,res)=>{
    res.send('Home');
})
app.get('/about', (req,res)=>{
    res.send('About');
})
app.get('/api/products', (req,res)=>{
    res.send('Products');
})
app.get('/api/items',authorize, (req,res)=>{
    console.log(req.user);
    res.send("Items");
})


app.listen(5000,()=>{
    console.log('server is running on port 5000...');
})