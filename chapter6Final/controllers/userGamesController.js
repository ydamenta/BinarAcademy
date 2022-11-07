const {user_game} = require('../models');
module.exports = {
    list: async (req,res) =>{
        try {
            const data = await user_game.findAll();
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
            const data = await user_game.create({
                "username": req.body.username,
                "email": req.body.email
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
            const data = await user_game.update({
                "username": req.body.username
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
            const data = await user_game.destroy({
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