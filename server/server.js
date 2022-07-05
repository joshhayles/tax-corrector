// server file

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const routesUrls = require('./routes/index');
const cors = require('cors');
const PORT = process.env.PORT || 4000;

// set up routes in routes folder

// bodyParser middleware setup
app.use(express.json())
app.use(cors())
app.use('/', routesUrls)
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json);

// dotevn config
dotenv.config()

// mongoose connection
mongoose.connect(process.env.DATABASE_ACCESS, () => {
    console.log('Database connected!')
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});