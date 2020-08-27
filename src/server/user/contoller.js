const model = require("./model");

async function getUser(id) {
    const user = await model.getUser(id);

    if (!user.rowCount) {
        await model.create();

        return;
    }

    return user.rows[0];
}

async function create() {
    await model.create();
}

async function update(id, fields) {
    try {
        for (const [key, value] of fields.entries) {

            await model.update(id, key, value);
        }

        return true;
    } catch (error) {
        return false;
    }
}

module.exports = {
    getUser,
    update,
    create,
}