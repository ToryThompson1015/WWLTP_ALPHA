const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();

// Specific routes
router.get("/seed", usersController.seedUsers);
router.post("/login", usersController.loginUser);
router.post("/register", usersController.createUser);
router.get("/:userId", usersController.getUserById);

// Catch-all route
router.get("/", usersController.getUsers);

module.exports = router;
