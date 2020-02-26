const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT | 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const indexRoutes = require('./routes/index');

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRoutes);

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
});