const mongoose = require("mongoose");


const usersSchema = new mongoose.Schema({
    userID: {type:String, unique: true},
    userName: {type:String},
    serverID: {type:String },
    
});

const modelUser = mongoose.model("Usuarios",usersSchema);

module.exports = modelUser;