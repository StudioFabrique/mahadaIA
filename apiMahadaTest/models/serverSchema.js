const mongoose = require("mongoose");


const serverSchema = new mongoose.Schema({
    serverID:{type:String, required: true},
    serverName:{type:String},
    serverDescription: {type:String},
    aproxMemberCount: {type:Number},
    aproxPresenceCount: {type:Number},
    serverChannels:{type:Array}
    
});

const modelServer = mongoose.model("Server",serverSchema);

module.exports = modelServer