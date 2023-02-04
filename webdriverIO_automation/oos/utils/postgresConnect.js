const { Client } = require('pg');
const pg = require('pg');


class postgresConnect {

        constructor() {
            // Postgres URI
            this.url = process.env.POSTGRES_URI;
            // Database Name
            this.dbName = process.env.DB_NAME;
        }

    async getPostgresClient() {
        const client = new Client({
            user: process.env.USER,
            host: process.env.HOST,
            database: process.env.DB_NAME,
            password: process.env.PASSWORD,
            port: process.env.PORT,
        })
        await client.connect();
    }
    async MOngo() {

        const client = new pg.Client(this.url);
        await client.connect()
    }
}
export default new postgresConnect();
