const router = require("express").Router();
const controller = require("../../controllers/controllers");

// Book routes

router.use("/signup", controller.createUser);
router.use("/createScore", controller.createScore);
router.use("/updateScore", controller.updateScore);
router.use("/removeUser", controller.removeUser);
router.use("/getProfile", controller.getUser);



module.exports = router;
