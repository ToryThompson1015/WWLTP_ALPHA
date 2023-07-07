const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();

router.get("/", usersController.getUsers);
router.get("/seed", usersController.seedUsers);

module.exports = router;
