const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//dotenv config
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
    res.status(200).send({
        message: "server running!"
    });
});

app.use('/api/v1/user', require('./routes/userRoutes'));

// port
const port = process.env.PORT || 8080

// listen port
app.listen(port, ()=>{
    console.log(`Server running in ${process.env.NODE_MODE} mode on port ${port}`.bgBlue.white)
});