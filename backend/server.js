const express = require ("express");
const cors = require ('cors');
const data = require('./data.js');
const app = express();

//initiate use of cors in express app
app.use(cors());

//define get method of
app.get ("/api/products", (req,res)=>{
    //console.log("getting products");
    res.send(data.products);
});

app.listen(5000, ()=>{
    console.log("serve at http://localhost:5000");
});