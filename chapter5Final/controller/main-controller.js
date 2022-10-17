const path = require('path');

const getHomePage = (req, res) =>{
    return res.sendFile(path.join(__dirname,'../view/html/index.html'));
}

const playNow = (req, res) =>{
    return res.sendFile(path.join(__dirname,'../view/html/index-game.html'));
}

const login = (req, res) => {
    const dummyUser = {
        "email" : "yohansdamenta@gmail.com",
        "password" : "12345"
    };

   if(req.body.email === dummyUser.email && req.body.password === dummyUser.password){
        return res.status(200).send({"message" : "berhasil login", "data" : dummyUser});
   }

   return res.status(400).send({"message" : "tidak berhasil login"});
}

const product = (req,res) => {
    return res.json({
        "id" : 1,
        "name" : "buku-damneta",
        "price" : 5000
    });
}

module.exports = {getHomePage,login,product,playNow};