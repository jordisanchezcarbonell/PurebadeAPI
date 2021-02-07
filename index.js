const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;



var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kazukun:Kazukun23@cluster0.awxst.mongodb.net/Apiportfolio?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
// parse application/json
app.use(bodyParser.json());
app.use(cors());

/*
*/
  
 /*
 MongoClient
.connect(uri, {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(`DB Connection Error: ${err.message}`);
});
*/
app.get("/api/products", (req, res) => {
  
    MongoClient.connect(uri, function(err, db) {
      console.log('DB Connected!')
        if (err) throw err;
        var dbo = db.db("Apiportfolio");
        //Find all documents in the customers collection:
        dbo.collection("posts").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(err)

          db.close();
          res.send(result);
        });


      });
  });

  // Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});

app.get('/',(req,res) => {
    res.send("This is a sample express app")
})


