const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).send({
        message: "server running!"
    });
});

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log(`server running in ${process.env.NODE_MODE} mode on port ${port}`)
});