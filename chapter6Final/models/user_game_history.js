'use strict';
const user_game = require('./user_game');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //this.belongsTo(user_game);
      this.belongsTo(models.user_game, {
        foreignKey: 'id'
      });
    }
  }
  user_game_history.init({
    userID: DataTypes.INTEGER,
    gamesID: DataTypes.INTEGER,
    gamesNames: DataTypes.STRING,
    currentScore: DataTypes.INTEGER,
    highScore: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_game_history',
  });
  return user_game_history;
};