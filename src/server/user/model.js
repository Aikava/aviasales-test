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
    const result = await client.query(`
    INSERT INTO users(email, share)
    VALUES(null, false) RETURNING id`);

    return result.rows[0];
}

async function update(id, field, value) {
    let insertingValue = value;

    if (typeof value === "string") {
        insertingValue = `'${value}'`;
    }

    await client.query(`UPDATE users SET ${field}=${insertingValue} WHERE id=${id}  `);
}

module.exports = {
    update,
    create,
    getUser
};