const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/usersControllers.js");

router.post("/register", UsersController.createUser);
router.post("/login", UsersController.loginUser);
router.get("/:userID", UsersController.getUserInfo);

module.exports = router;
