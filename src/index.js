const express = require('express');
const routes = require('./routes');
const connection = require('./connection/connection');
const mongoose = require('mongoose');
const cors = require('cors')




const app = express();

mongoose.connect(connection ,
    {
        useNewUrlParser: true ,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
);

app.use(cors())
app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || 3333);
