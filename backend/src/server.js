const express = require('express');
const app = express();
const env = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongo = require('mongodb');

env.config();
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(cors())

const MongoClient = mongo.MongoClient;
const mongouri = 'mongodb://localhost:27017';

let db;

/**
 1. /
 2. /product
 3. /product?q=
 4. /product/:id => session or deals id
 5.
 **/


app.get('/', (req, res) => {
    res.json({
        msg : "Welcome to flipkart Clone"
    })
});



app.get("/products", (req,res) => {
    let productId = Number(req.query.productId);
    console.log(productId);

    let query = {}

    if (productId) {
        query = { product_id : productId }
    }
    
    db.collection("products").find(query).toArray((err, result) => {
        if (err) throw err;
        res.json(result);
    })
})


MongoClient.connect(mongouri, (err, client) => {
    if (err) {
        console.log(`Error While Connecting` + err);
    } else {
        db = client.db("Flipkart");
        console.log(`Database Connected...`);
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
});