
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kazukun:Kazukun23@cluster0.awxst.mongodb.net/Apiportfolio?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
// parse application/json
const app = express();
const PORT = process.env.PORT || 3000;

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
        if (err) throw err;
        var dbo = db.db("Apiportfolio");
        //Find all documents in the customers collection:
        dbo.collection("posts").find({}).toArray(function(err, result) {
          if (err) throw err;
        

          db.close();
          res.send(result);
        });


      });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  