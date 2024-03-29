// https://github.com/Musawirkhann/Nodejs_Mongodb_Express_Multer
'use strict';

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/file-upload-routes');

const port = process.env.PORT || 8080;
const app = express();

require('./database')();

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', fileRoutes.routes);

app.listen(port, () => {
    console.log("hi...", port)
})