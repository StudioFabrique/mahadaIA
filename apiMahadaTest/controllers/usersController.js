const Users = require('../models/userSchema')


exports.getUsers = async ( req, res, next ) => {
    try {
        const users = await Users.find({});
        res.json(users);
        
    } catch (error) {
        console.log(error);
        next();
    }
}