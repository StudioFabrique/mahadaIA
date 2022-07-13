const mongoose = require("mongoose");


const messagesSchema = new mongoose.Schema({
    messageID:{type:String, required: true, unique: true},
    messageContent:{type:String,},
    userID: {type:String, required: true},
    userName: {type:String, required: true},
    serverID: {type:String},
    channelID: {type:String, required: true},
    timeStamp:{type:Date, required: true},
    editedTimeStamp:{type:Date,},
    mentions:{type:String,},
    
});

const modelMessage = mongoose.model("Mensajes",messagesSchema);

module.exports = modelMessage