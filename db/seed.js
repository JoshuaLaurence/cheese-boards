const { Board, Cheese, User } = require("../models")
const db = require("../db/db")

async function seed() {

    await db.sync({force:true})

    await User.bulkCreate([
        {
            name: "Vincent",
            email: "vince@dreamland.com"
        },
        {
            name: "Billy Summers",
            email: "b.summers@alice.com"
        },
        {
            name: "Bob The Builder",
            email: "bob@thebuilder.com"
        },
        {
            name: "Mr Reade",
            email: "jack.reade@thewell.co.uk"
        }
    ])

    await Board.bulkCreate([
        {
            type: "The Blue Cheese Board",
            description: "Served on a thick slap of veneered walnut, this pungent board will have your taste buds sizzling. Featuring Gorgonzola and Blue Stilton",
            rating: 8.4,
            UserId: 1
        },
        {
            type: "The American Cheese Board",
            description: "It's bad for you on so many levels, hence it remains a fan favourite. Ten slices of still individually wrapped american cheese served on a thin yet weighty slab of concrete",
            rating: 9.2,
            UserId: 2,
        },
        {
            type: "The British Cheese Board",
            description: "Blue Stilton, Double Gloucester, and a dense wedge of Wensleydale meet in the confines of a small wicker basket. A cup of tea is an optional and favourable extra",
            rating: 8.1,
            UserId: 2
        },
        {
            type: "The Soft Cheese Board",
            description: "Brie, Camembert, Feta and Ricotta all meet on a rounded and polished circular platter hand crafted from red oak",
            rating: 6.8,
            UserId: 3
        },
        {
            type: "The Semi-Hard Cheese Board",
            description: "Gouda, Swiss and a healthy dose of Monterey Jack. Displayed on a solid subsection of marble, a safe and mouthwatering bet",
            rating: 7.9,
            UserId: 4
        },
        {
            type: "The Fresh Cheese Board",
            description: "An unusual and yet delicious choice. Mozerella, Feta, Brie and Swiss cheese all served on a natural slice of slate",
            rating: 7.3,
            UserId: 4
        },
    ])

    await Cheese.bulkCreate([
        {
            title: "Gorgonzola",
            description: "A Blue Classic",
        },
        {
            title: "Blue Stilton",
            description: "A British Blue Classic",
        },
        {
            title: "American Cheese",
            description: "A Staple of American Culture"
        },
        {
            title: "Double Gloucester",
            description: "A British Born Beauty"
        },
        {
            title: "Wensleydale",
            description: "If It's Good Enough for Wallace & Gromit"
        },
        {
            title: "Brie",
            description: "A Personal Favourite"
        },
        {
            title: "Camembert",
            description: "A French Fancy"
        },
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
            title: "Mozerella",
            description: "A Soft Staple"
        }
    ])

    const board = await Board.findAll()
    const cheeses = await Cheese.findAll()
    await cheeses[0].addBoards([board[0]])
    await cheeses[1].addBoards([board[0], board[2]])
    await cheeses[2].addBoards([board[1]])
    await cheeses[3].addBoards([board[2]])
    await cheeses[4].addBoards([board[2]])
    await cheeses[5].addBoards([board[3],board[5]])
    await cheeses[6].addBoards([board[3]])
    await cheeses[7].addBoards([board[3],board[5]])
    await cheeses[8].addBoards([board[4],board[5]])
    await cheeses[9].addBoards([board[3]])
    await cheeses[10].addBoards([board[4]])
    await cheeses[11].addBoards([board[4]])
    await cheeses[12].addBoards([board[5]])


}
module.exports = {seed};
