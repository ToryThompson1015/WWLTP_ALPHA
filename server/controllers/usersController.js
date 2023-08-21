const bcrypt = require("bcryptjs");

const { faker } = require("@faker-js/faker");
const User = require("../models/user");

exports.getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user with the hashed password
    await User.create({
      email,
      password: hashedPassword,
    });

    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error during registration." });
  }
};

exports.seedUsers = async (req, res) => {
  try {
    // Hash the common password
    const hashedPassword = await bcrypt.hash("admin", 10);

    const users = Array.from({ length: 10 }, () => ({
      email: faker.internet.email(),
      password: hashedPassword,
    }));

    await User.deleteMany({});
    await User.insertMany(users);
    res.json({ message: "Users seeded successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error during seeding." });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error Getting" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);

    // Check if user exists
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(400).json({ error: "Email doesn't exist." });
    }

    // Check if the provided password matches the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(400).json({ error: "Passwords don't match." });
    }

    //TODO: Return JWT token
    res.json({ message: "Login successful", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error during login." });
  }
};
