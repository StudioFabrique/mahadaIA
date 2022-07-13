const UserRepos = require('../models/userReposSchema')



exports.getRepos = async ( req, res, next ) => {
    try {
        const userRepos = await UserRepos.find({});
        res.json(userRepos);
        
    } catch (error) {
        console.log(error);
        next();
    }
}
