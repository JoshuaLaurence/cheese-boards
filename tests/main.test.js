const { Sequelize } = require("sequelize")
const db = require("../db/db")

describe('Database actually forms', () => {
    beforeAll(async () => {
        await db.sync({force: true})
    })
    test("Database is created", () => {
        expect(db).toBeInstanceOf(Sequelize)
    })
})
