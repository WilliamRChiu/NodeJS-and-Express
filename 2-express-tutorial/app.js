const express = require('express');
const app = express();
const people = require("c:/Users/William/.vscode/Node_JS/2-express-tutorial/routes/people");
const auth = require("c:/Users/William/.vscode/Node_JS/2-express-tutorial/routes/auth")
// let {people} = require('c:/Users/William/.vscode/Node_JS/2-express-tutorial/data');

//static assets
app.use(express.static('./methods-public'));
//parse form data
app.use(express.urlencoded({extended:false}));
//parse json
app.use(express.json());

app.use('/api/people',people);
app.use('/login',auth);




app.listen(5000,()=>{
    console.log('server is running on port 5000...');
})