const {Board, Cheese, User} = require("../models")
const db = require("../db/db")

describe("Individual Cheese Tests", () => {
    beforeAll(async () => {
        await db.sync({force: true})
    })

    test("Can create Cheese with title and description", async () => {
        const testCheese = await Cheese.build({title: "Doux de montage", description: "Soft and yet flavoursome"})
        expect(testCheese.title).toEqual("Doux de montage")
        expect(testCheese.description).toEqual("Soft and yet flavoursome")
    })

    test("Checks --type variable is of type string", async () => {
        const testType = await Cheese.create({type: 11, description: "Pungent and sizzly, the perfect cheese to pair with a soft and "}).catch(e => "Type Error")
        expect(testType).toEqual("Type Error")
    })

    test("Checks --description variable is of type string", async () => {
        const testDescription = await Cheese.create({type: "Gorgonzola", description: 27}).catch(e => "Description Error")
        expect(testDescription).toEqual("Description Error")
    })
})
