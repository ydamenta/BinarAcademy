const {user_game_history} = require('../models');
module.exports = {
    list: async (req,res) =>{
        try {
            const data = await user_game_history.findAll();
            return res.json({
                data: data,
            });
        } catch (error) {
            return res.json({
                "message" : "Invalid Operation!"
            });
        }
    },
    create: async (req,res) =>{
        try {
            const data = await user_game_history.create({
                "userID": req.body.userID,
                "gamesID": req.body.gamesID,
                "gamesNames": req.body.gamesNames,
                "currentScore": req.body.currentScore,
                "highScore": req.body.highScore
            });
            return res.json({
                data: data,
            });            
        } catch (error) {
            return res.json({
                "message" : "Invalid Operation!"
            });
        }
    },   
    update: async (req,res) =>{
        try {
            const data = await user_game_history.update({
                "userID": req.body.userID,
                "gamesID": req.body.gamesID,
                "gamesNames": req.body.gamesNames,
                "currentScore": req.body.currentScore,
                "highScore": req.body.highScore
            },{
                where: {
                    id: req.body.id
                }
            });
            return res.json({
                data: data
            });            
        } catch (error) {
            return res.json({
                "message" : "Invalid Operation!"
            });
        }
    },  
    destroy: async (req,res) =>{
        try {
            const data = await user_game_history.destroy({
                where: {
                    id: req.body.id
                }
            });
            return res.json({
                data: data,
            });            
        } catch (error) {
            return res.json({
                "message" : "Invalid Operation!"
            });
        }
    }        
}