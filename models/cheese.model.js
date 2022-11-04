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
            is: ["^[a-z]+$",'i'],
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: ["^[a-z]+$",'i'],
        }
    }
}, {
    sequelize: db
})

module.exports = Cheese
