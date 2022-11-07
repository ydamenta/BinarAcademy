const {user_game_biodata} = require('../models');
module.exports = {
    list: async (req,res) =>{
        try {
            const data = await user_game_biodata.findAll();
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
            const data = await user_game_biodata.create({
                "userID": req.body.userID,
                "firstName": req.body.firstName,
                "lastName": req.body.lastName,
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
            const data = await user_game_biodata.update({
                "userID": req.body.userID,
                "firstName": req.body.firstName,
                "lastName": req.body.lastName,
                "email": req.body.email
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
            const data = await user_game_biodata.destroy({
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