const { faker } = require("@faker-js/faker");
const User = require("../models/user");

exports.getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

exports.seedUsers = async (req, res) => {
  const users = Array.from({ length: 10 }, () => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
  }));

  try {
    await User.deleteMany({});
    await User.insertMany(users);
    res.json({ message: "Users seeded successfully" });
  } catch (err) {
    console.log(err);
  }
};
