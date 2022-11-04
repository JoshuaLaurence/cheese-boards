const {Board, Cheese, User} = require("../models")
const db = require("../db/db")

describe("Cheese Board Tests", () => {
    // beforeAll(async () => {
    //     await db.sync({force: true})
    // })

    test("Can create Board with type, description and number rating", async () => {
        const testBoard = await Board.build({type: "The French Board", description: "An unbelievable combination of seven different traditional French cheeses displayed on a platter crafted from maple wood", rating: 6.4})
        expect(testBoard.type).toEqual("The French Board")
        expect(testBoard.description).toEqual("An unbelievable combination of seven different traditional French cheeses displayed on a platter crafted from maple wood")
        expect(testBoard.rating).toEqual(6.4)
    })

    test("Checks --type variable is of type string", async () => {
        const testType = await Board.create({type: 11, description: "Ten slices of still individually wrapped American Cheese presented on a thick slab of concrete", rating: 6.4}).catch(e => "Type Error")
        expect(testType).toEqual("Type Error")
    })

    test("Checks --description variable is of type string", async () => {
        const testDescription = await Board.create({type: "The American Board", description: 27, rating: 6.4}).catch(e => "Description Error")
        expect(testDescription).toEqual("Description Error")
    })

    test("Checks --rating variable is numeric", async () => {
        const testRating = await Board.create({type: "The American Board", description: "Ten slices of still individually wrapped American Cheese presented on a thick slab of concrete", rating: "6.4"}).catch(e => "Rating Error")
        expect(testRating).toEqual("Rating Error")
    })
})
