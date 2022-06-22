const mongoose = require("mongoose");


const channelSchema = new mongoose.Schema({
    channelID:{type:String, required: true, unique: true},
    channelName:{type:String},
    serverID:{type:String, required: true},
    channelType: {type:String}

    
});

const modelChannel = mongoose.model("Channel",channelSchema);

module.exports = modelChannel