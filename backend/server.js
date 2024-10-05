// commonJS syntax 
// const express = require ("express");
// const cors = require ('cors');
// const data = require('./data.js');

// ES6 syntax - change to this after babel is installed
import express from 'express';
import cors from 'cors';
import data from './data.js';

const app = express();

//ES6

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