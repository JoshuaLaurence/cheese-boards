const {Sequelize} = require("sequelize");
const path = require("path")

const db = new Sequelize({
    dialect: "sqlite",
    path: path.join(__dirname, "theCheeseCrypt.sqlite")
})

module.exports = db
