const { Router } = require("express");
const userController = require("./user/contoller");

const userRouter = Router();

userRouter.get("/users/create", async function (res, res, next) {
    try {
        await userController.create();

        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(500);
    }

    next();
});
userRouter.route("/users/:id")
    .get(async function (req, res, next) {
        const { id } = req.params;

        try {
            const user = await userController.getUser(id);

            res.send(JSON.stringify(user));
        } catch (err) {
            res.sendStatus(500);
        }

        next();
    })
    .post(async function (req, res, next)  {
        const { id } = req.params;

        try {
            const fields = req.body;
            console.log(fields);

            await userController.update(id, fields);
            res.sendStatus(200);
        } catch (error) {
            res.sendStatus(500);
        }

        next();
    });
module.exports = userRouter;