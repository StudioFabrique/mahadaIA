const DigiUsers = require('../models/digiUsersSchema');



exports.getDigiUsers = async ( req, res, next ) => {
    try {
        const digiUsers = await DigiUsers.find({});
        res.json(digiUsers);
        
    } catch (error) {
        console.log(error);
        next();
    }
}