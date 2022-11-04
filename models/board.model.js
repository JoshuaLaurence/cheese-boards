const {Sequelize, DataTypes, Model} = require("sequelize")
const db = require("../db/db")

const Board = db.define("Board", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: ["[\w\s]+",'i'],
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: ["[\w\s]+",'i'],
        }
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true
        }
    }
}, {
    sequelize: db
})

module.exports = Board
