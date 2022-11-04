const {Board, Cheese, User} = require("../models")
const db = require("../db/db.js")
const { ValidationError } = require("sequelize")

describe("User Tests", () => {
    // beforeAll(async () => {
    //     await db.sync({force: true})
    // })

    test("Can create User with name and valid email", async () => {
        const testUser = await User.build({name: "Dora", email: "dora@the-xplorer.com"})
        expect(testUser.name).toEqual("Dora")
        expect(testUser.email).toEqual("dora@the-xplorer.com")
    })

    test("Checks --name variable is of type string", async () => {
        const testUsername = await User.create({name: 11, email: "dora@the-xplorer.com"}).catch(e => "Name Error")
        expect(testUsername).toEqual("Name Error")
    })

    test("Checks --email varibale follows the valid email format", async () => {
        await expect(User.create({name: "Steven Gary", email:"bogusemail"})).rejects.toThrow(ValidationError)
    })
})
