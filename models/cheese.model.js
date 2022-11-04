const {Sequelize, DataTypes, Model} = require("sequelize")
const db = require("../db/db")

const Cheese = db.define("Cheese", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: ["[\w\s]+",'i'], //Validates to see whether the input is a string
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: ["[\w\s]+",'i'], //Validates to see whether the input is a string
        }
    }
}, {
    sequelize: db
})

module.exports = Cheese
