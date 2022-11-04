const {Sequelize, DataTypes, Model} = require("sequelize")
const db = require("../db/db")

const User = db.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: ["^[a-z]+$",'i'],
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: "This does not appear to be a valid email address..."
            }
        }
    }
}, {
    sequelize: db
})

module.exports = User
