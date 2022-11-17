require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");

require('./src/config/passport')

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//const uri = 'mongodb+srv://jccorona:carlsagan@cluster0.iknwuem.mongodb.net/iDieta?retryWrites=true&w=majority';
const uri = process.env.MONGO_URL;

mongoose.connect(uri);

app.use('/v1', require('./src/routes'));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("It's working!!"))

app.get('/',(req, res) => res.send("Hola Api de iDietas"))