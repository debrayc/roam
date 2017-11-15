const pgp = require('pg-promise')()
const config = {
    database: "roam",
    host: "localhost",
    port: 5432
}
const db = pgp(config)

module.exports = db