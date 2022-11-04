const {Board, Cheese, User} = require("../models")
const db = require("../db/db")

describe("Association Tests", async() => {
    // beforeAll(async () => {
    //     await db.sync({force: true})
    // })

    const testUser = await User.create({name: "Steven Gary", email: "steven.gary@totallyrealemails.com"})
    const boards = await Board.bulkCreate([
        {
            type: "The Semi-Hard Cheese Board",
            description: "Gouda, Swiss, Brie and a healthy dose of Monterey Jack. Displayed on a solid subsection of marble, a safe and mouthwatering bet",
            rating: 7.9
        },
        {
            type: "The Soft Cheese Board",
            description: "Brie, Swiss, Feta and Ricotta all meet on a rounded and polished circular platter hand crafted from red oak",
            rating: 6.8,
            UserId: 3
        }
    ])
    await testUser.addBoards([boards[0], boards[1]])

    const cheeses = await Cheese.bulkCreate([
        {
            title: "Feta",
            description: "A Greek Goodie"
        },
        {
            title: "Swiss",
            description: "A Sparkle of Swiss Sweetness"
        },
        {
            title: "Ricotta",
            description: "A Cheese"
        },
        {
            title: "Gouda",
            description: "Another Cheese"
        },
        {
            title: "Monterey Jack",
            description: "I Lost Creativity"
        },
        {
            title: "Brie",
            description: "A Personal Favourite"
        }
    ])
    await boards[0].addCheeses([cheeses[1], cheeses[3], cheeses[4], cheeses[5]])
    await boards[1].addCheeses([cheeses[0], cheeses[1], cheeses[2], cheeses[5]])

    test('Test that a board belongs to one user', async () => {
        const boardsZerosUser = await boards[0].getUser();
        expect(boardsZerosUser).toEqual(testUser)
    });
    // test('Test that a board belongs to one user', () => {

    // });
    // test('Test that a board belongs to one user', () => {

    // });
})
