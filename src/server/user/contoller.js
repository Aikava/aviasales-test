const model = require("./model");

async function getUser(id) {
    const user = await model.getUser(id);

    if (!user.rowCount) {
        return await model.create();
    }

    return user.rows[0];
}

async function create() {
    return await model.create();
}

async function update(id, fields) {
    try {
        for (const [key, value] of Object.entries(fields)) {
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