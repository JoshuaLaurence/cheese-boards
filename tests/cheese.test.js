const {Board, Cheese, User} = require("../models")
const db = require("../db/db")

describe("Individual Cheese Tests", () => {

    test("Can create Cheese with title and description", async () => {
        const testCheese = await Cheese.build({title: "Doux de montage", description: "Soft and yet flavoursome"})
        expect(testCheese.title).toEqual("Doux de montage")
        expect(testCheese.description).toEqual("Soft and yet flavoursome")
    })
})
