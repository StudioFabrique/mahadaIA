const Channels = require('../models/channelSchema')




exports.getDiscordChannels = async ( req, res, next ) => {
    try {
        const channels = await Channels.find({});
        // console.log(channels)
        res.json(channels);
        
    } catch (error) {
        console.log(error);
        next();
    }
}


