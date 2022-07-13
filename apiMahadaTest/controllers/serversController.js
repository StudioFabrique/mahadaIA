const Servers = require('../models/serverSchema')



exports.getServers = async ( req, res, next ) => {
    try {
        const servers = await Servers.find({});
        res.json(servers);
        
    } catch (error) {
        console.log(error);
        next();
    }
}
