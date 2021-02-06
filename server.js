const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://kazukun:Kazukun23@cluster0.awxst.mongodb.net/APIPORTFOLIO?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");

//mongoose.connect('mongodb+srv://kazukun:Kazukun23@cluster0.awxst.mongodb.net/APIPORTFOLIO?retryWrites=true&w=majority');

const PORT = process.env.PORT || 3000;
const cors = require("cors");

// parse application/json
app.use(bodyParser.json());
app.use(cors());
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
//create database connection
/*
const conn = mysql.createPool({
  host: "us-cdbr-east-06.cleardb.net",
  user: "b2d957bfd61819",
  password: "ceb137e2",
  database: "heroku_479773ea6d60705",
});
*/
/*//connect to database
conn.connect(function(err) {
  if (err) {
      console.error('Error:- ' + err.stack);
      return;
  }

  console.log('Connected Id:- ' + conn.threadId);

});
*/
//show all products
app.get("/api/products", (req, res) => {
  let sql = "SELECT * FROM posts";
  let query = client.query(sql, (err, results) => {
    if (err) {
      console.error("Error:- " + err.stack);
      return;
    }
    res.send(results);
  });
});
/*
//show single product
app.get('/api/products/:id',(req, res) => {
  let sql = "SELECT * FROM product WHERE product_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//add new product
app.post('/api/products',(req, res) => {
  let data = {product_name: req.body.product_name, product_price: req.body.product_price};
  let sql = "INSERT INTO product SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//update product
app.put('/api/products/:id',(req, res) => {
  let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete product
app.delete('/api/products/:id',(req, res) => {
  let sql = "DELETE FROM product WHERE product_id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 */
//Server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
