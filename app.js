const express = require('express');
const helmet = require('helmet');
const path = require('path');

const routes = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


// sets verious HTTP headers 
app.use(helmet());
// serve static files from public folder for client side rendering -- server side rendering
app.use(express.static("public"));
// parse incoming requests data (json) 
app.use(express.json());
// parse incoming requests data (urlencoded) -- makes more easily accessible
app.use(express.urlencoded({ extended: true }));


app.use(routes);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});