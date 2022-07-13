const express = require('express');
const { dbConnection } = require('./db/config');
const routes = require('./routes/routes');
require('dotenv').config();
// const modelUser = require("./models/userSchema")
// const modelMessage = require("./models/messageSchema")
// const modelServer = require("./models/serverSchema")
// const modelChannel = require("./models/channelSchema")



dbConnection();


const app = express();
app.use( express.json());
app.use( express.urlencoded({extended:true}));
app.use('/', routes());


app.listen(process.env.PORT, () => {
    console.log(`server on port ${ process.env.PORT }`)
});