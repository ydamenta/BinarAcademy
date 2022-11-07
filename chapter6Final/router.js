const express = require('express');
const router = express.Router();

const userGamesController = require('./controllers/userGamesController');
const userGameHistController = require('./controllers/userGameHistController');
const userBioController = require('./controllers/userBioController');


//user_game
router.get('/user_game/list',userGamesController.list);
router.post('/user_game/create',userGamesController.create);
router.put('/user_game/update',userGamesController.update);
router.delete('/user_game/destroy',userGamesController.destroy);


//user_game_history
router.get('/user_game_history/list',userGameHistController.list);
router.post('/user_game_history/create',userGameHistController.create);
router.put('/user_game_history/update',userGameHistController.update);
router.delete('/user_game_history/destroy',userGameHistController.destroy);

//user_game_bio
router.get('/user_game_biodata/list',userBioController.list);
router.post('/user_game_biodata/create',userBioController.create);
router.put('/user_game_biodata/update',userBioController.update);
router.delete('/user_game_biodata/destroy',userBioController.destroy);

module.exports = router;