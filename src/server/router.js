const { Router } = require("express");
const userController = require("./user/contoller");

const userRouter = Router();

userRouter.get("/users/create", async function (res, res, next) {
    try {
        const {id: userId}  = await userController.create();

        res.cookie("user_id", userId)
            .sendStatus(200);
    } catch (err) {
        res.sendStatus(500);
    }

    next();
});
userRouter.get("/users/:id(\\d+)/", async function (req, res, next) {
    const {id} = req.params;

    try {
        const user = await userController.getUser(id);

        res.send(JSON.stringify(user));
    } catch (err) {
        res.sendStatus(500);
    }

    next();
});
userRouter.post("/users/:id(\\d+)/", async function (req, res, next) {
    const { id } = req.params;

    try {
        const fields = req.body;

        await userController.update(id, fields);
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }

    next();
});
module.exports = userRouter;