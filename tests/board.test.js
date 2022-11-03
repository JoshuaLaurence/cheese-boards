const {Board, Cheese, User} = require("../models")
const {seed} = require("../db/seed")
const db = require("../db/db")

describe("Cheese Board Tests", () => {

    test("Can create Board with type, description and number rating", async () => {
        const testBoard = await Board.create({type: "The French Board", description: "An unbelievable combination of seven different traditional French cheeses displayed on a platter crafted from maple wood", rating: 6.4})
        expect(testBoard.type).toEqual("The French Board")
        expect(testBoard.description).toEqual("An unbelievable combination of seven different traditional French cheeses displayed on a platter crafted from maple wood")
        expect(testBoard.rating).toEqual(6.4)
    })

    test("Can update type an individual instance of Board", async () => {
        const testBoard = await Board.findByPk(2)
        await testBoard.update({type: "Updated Type"})
        expect(testBoard.type).toEqual("Updated Type")
    })
})
