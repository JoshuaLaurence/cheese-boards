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
            description: "Served on a thick slap of veneered walnut, this pungent board will have your taste buds sizzling. Gorgonzola, Blue Stilton, and a couple more fan favourites",
            rating: 8.4
        },
        {
            type: "The American Cheese Board",
            description: "It's bad for you on so many levels, hence it remains a fan favourite. Ten slices of still individually wrapped american cheese served on a thin yet weighty slab of concrete",
            rating: 9.2
        },
        {
            type: "The British Cheese Board",
            description: "Blue Stilton, Double Gloucester, and a dense wedge of Wensleydale meet in the confines of a small wicker basket. A cup of tea is an optional and favourable extra",
            rating: 8.1
        },
        {
            type: "The Soft Cheese Board",
            description: "Brie, Camembert, Feta and Ricotta all meet on a rounded and polished circular platter hand crafted from red oak",
            rating: 6.8
        },
        {
            type: "The Semi-Hard Cheese Board",
            description: "Gouda, Swiss and a healthy dose of Monterey Jack. Displayed on a solid subsection of marble, a safe and mouthwatering bet",
            rating: 7.9
        },
        {
            type: "The Fresh Cheese Board",
            description: "An unusual and yet delicious choice. Mozeralla, Feta, Brie and swiss cheese all served on a natural slice of slate",
            rating: 7.3
        },
    ])
}
seed();
