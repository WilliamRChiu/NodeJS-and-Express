const express= require('express');
const router = express.Router();
let {people} = require('c:/Users/William/.vscode/Node_JS/2-express-tutorial/data');

router.post('/',(req,res)=>{
    const {name} = req.body;
    if(name){
        return res.status(200).send("welcome "+name);
    }
    else{
        res.status(401).send("please provide credentials");
    }
})
module.exports = router;