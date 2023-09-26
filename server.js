const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http//:10.100.11.19:8081'
};

app.use(cors(corsOptions));

//use application/json request
app.use(express.json());
//use application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}));

//root route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Jago Commerce"});
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});