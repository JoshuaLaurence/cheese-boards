const {Board, Cheese, User} = require("../models")
const db = require("../db/db")

describe("Association Tests", () => {
    beforeAll( async () => {
        await db.sync({force: true})
        const testUser = await User.create({name: "Steven Gary", email: "steven.gary@totallyrealemails.com"})
        const boards = await Board.bulkCreate([
            {
                type: "The Semi-Hard Cheese Board",
                description: "Gouda, Swiss, Brie and a healthy dose of Monterey Jack. Displayed on a solid subsection of marble, a safe and mouthwatering bet",
                rating: 7.9,
            },
            {
                type: "The Soft Cheese Board",
                description: "Brie, Swiss, Feta and Ricotta all meet on a rounded and polished circular platter hand crafted from red oak",
                rating: 6.8,
            }
        ])
        const brie = await Cheese.create({title: "Brie", description: "tada"}, {validate: false})
        await brie.addBoards([boards[0], boards[1]])

        const newBoard = await Board.create({type: "Boardy", description: "Creativity is depleating", rating: 1.2}, {validate: false})
        const feta = await Cheese.create({title: "Feta", description: "tadaah"}, {validate: false})
        await newBoard.addCheeses([brie, feta])
        await testUser.addBoards([boards[0], boards[1]])
    })
    test("Test that a user can have many boards", async () => {
        const retrievedBoards = await Board.findAll({where: {UserId: 1}});
        expect(retrievedBoards.length).toBeGreaterThan(1)
    })
    test('Test that a board belongs to one user', async () => {
        const boardsZerosUser = await Board.findByPk(1)
        const theUser = await User.findByPk(1)
        expect(boardsZerosUser.UserId).toEqual(theUser.id)
    });
    test('Test that a board can have many cheeses', async () => {
        const brieCheese = await Cheese.findByPk(1);
        const boardCount = await brieCheese.getBoards()
        expect(boardCount.length).toEqual(3);
    });
    test('Test that a cheese can belong to many boards', async () => {
        const newBoardCount = await Board.findByPk(3);
        const cheeseCount = await newBoardCount.getCheeses()
        expect(cheeseCount.length).toEqual(2);
    });

    test("Eager Loading for Board", async() => {
        const board = await Board.findByPk(3, {include: Cheese})
        expect(board).toBeTruthy()
    })
    test("Eager Loading for User", async() => {
        const user = await User.findByPk(1, {include: Board})
        expect(user).toBeTruthy()
    })
    test("Eager Loading for Board", async() => {
        const cheese = await Cheese.findByPk(1, {include: Board})
        expect(cheese).toBeTruthy()
    })
})
