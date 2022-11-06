const express = require('express');
const  bodyParser = require('body-parser');
const app= express();
const port = process.env.port || 8080 //this is use for server port
const cors =  require('cors');

const authRoute = require('./routes/auth-route');

const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/shopapp', (err) => {
    if(err){
        console.log("database is not as connected", err)
    }else{
        console.log("database is connected")
    }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())


app.use('/auth',authRoute);



app.get('/', (req,res) => {
    res.send("welcome to code damm server by ritul anand ")
})
app.listen(port, () => {
    console.log("node server is connected", port)
});

