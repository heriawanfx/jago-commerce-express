const express = require('express');
const cors = require('cors');
const db = require('./app/models');
const bookRoute = require('./app/routes/banner.route');

const app = express();

const port = process.env.PORT || 3000;

var corsOptions = {
    origin: `http//:10.100.11.19:${port}`
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

db.sequelize.sync();
app.use('/api/banners', bookRoute);

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});