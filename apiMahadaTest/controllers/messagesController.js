const Messages = require('../models/messageSchema')


exports.getMessages = async ( req, res, next ) => {
    try {
        const messages = await Messages.find({});
        res.json(messages);
        
    } catch (error) {
        console.log(error);
        next();
    }
}
