const express = require('express');
const app = express();
const{products} = require('c:/Users/William/.vscode/Node_JS/2-express-tutorial/data.js');


app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
  })
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
  
    res.json(newProducts)
})

//inefficient.  Use route parameters instead
// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((product)=> product.id===1);
//     res.json(singleProduct);
// })

app.get('/api/products/:productID', (req, res) => {

    // console.log(req);
    // console.log(req.params);
    const{productID} = req.params;
    const singleProduct = products.find((product)=> product.id===Number(productID));
    if(!singleProduct){
        return res.status(404).send("product does not exist");
    }
    res.json(singleProduct);
    
});

app.get('api/products/:productID/reviews/:reviewID', (req,res)=>{
    console.log(req.params);
    console.log("hello world");
})

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    const {search,limit} = req.query;
    let sortedProducts = [...products];
    if (search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        });
    }
    if (limit){
        sortedProducts=sortedProducts.slice(0,Number(limit));
    }
    if(sortedProducts.length<1){
        //res.status(200).send("No products match your search");
        return res.status(200).json({success:true,data:[]});
    }
    return res.status(200).json(sortedProducts);
    
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})