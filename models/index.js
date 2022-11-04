const Board = require("./board.model");
const Cheese = require("./cheese.model");
const User = require("./user.model");

//Associations

//ONE User can have MANY Boards
User.hasMany(Board);
Board.belongsTo(User);

//MANY Cheeses can belong to MANY Boards
Board.belongsToMany(Cheese, {through: "Board_Cheese"})
Cheese.belongsToMany(Board, {through: "Board_Cheese"})

module.exports = { Board, Cheese, User }
