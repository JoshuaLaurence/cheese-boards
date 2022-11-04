const {Board, Cheese, User} = require("../models")
const db = require("../db/db")
const { ValidationError } = require("sequelize")

describe("User Tests", () => {

    test("Can create User with name and valid email", async () => {
        const testUser = await User.create({name: "Dora", email: "dora@the-xplorer.com"})
        expect(testUser.name).toEqual("Dora")
        expect(testUser.email).toEqual("dora@the-xplorer.com")
    })

    test("Throws error with invalid email", async() => {
        await expect(User.create({name: "Steven Gary", email:"bogusemail"})).rejects.toThrow(ValidationError)
    })
})
