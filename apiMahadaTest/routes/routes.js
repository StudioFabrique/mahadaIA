const express = require('express');
const router = express.Router();
const channelsController = require('../controllers/channelsController')
const digiUsersController = require('../controllers/digiUsersController')
const messageController = require('../controllers/messagesController')
const serversController = require('../controllers/serversController')
const userReposController = require('../controllers/userReposController')
const userController = require('../controllers/usersController')


module.exports = function(){

     router.get('/', (req, res) => {
        
        res.send('Hello world');
    })


    router.get('/channels', channelsController.getDiscordChannels);
    router.get('/digiusers', digiUsersController.getDigiUsers);
    router.get('/messages', messageController.getMessages);
    router.get('/servers', serversController.getServers);
    router.get('/userrepos', userReposController.getRepos);
    router.get('/users', userController.getUsers);





    return router;
}