// commonJS syntax
// const express = require ("express");
// const cors = require ('cors');
// const data = require('./data.js');

// ES6 syntax - change to this after babel is installed
import express from 'express';
import cors from 'cors';
import data from './data';

//crate express app - this initiates server
const app = express();

//  initiate use of cors in express app
app.use(cors());

//  define get method of
app.get('/api/products', (req, res) => {
  //  console.log("getting products");
  res.send(data.products);
});

// define get method for a single product
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x)=>x._id ===req.params.id);
  if (product){
    res.send(product);
  } else {
    res.status(404).send({message: 'Product Not Found!'});
  }
 });


app.listen(5000, () => {
  console.log('serve at http://localhost:5000');
});
