const { Client } = require("pg");
const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'aviasales',
    password: 'sql',
    port: 5432,
});

client.connect();

async function getUser(id) {
    return client.query(`SELECT id, share, email from users where id=${id}`);
}

async function create() {
    await client.query(`
    INSERT INTO users(email, share)
    VALUES(null, false)`);
}

async function update(id, field, value) {
    await client.query(`UPDATE users SET ${field}=${value} WHERE id=${id})`);
}

module.exports = {
    update,
    create,
    getUser
};