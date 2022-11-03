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

}
seed();
