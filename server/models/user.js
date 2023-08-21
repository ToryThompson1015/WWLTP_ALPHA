const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please use a valid email address."],
  },
  password: { type: String, required: true },
  preferences: [{ type: String, required: true }],
  profile: {
    userName: { type: String, required: true, default: "DefaultUserName" },
    favoriteGenre: [{ type: String }],
    favoriteAuthors: [{ type: mongoose.Schema.Types.ObjectId }],
  },
  accountDetails: {
    paidUser: { type: Boolean, required: true, default: false },
    firstName: { type: String, required: true, default: "FirstName" },
    lastName: { type: String, required: true, default: "LastName" },
    region: { type: String, required: true, default: "DefaultRegion" },
    phoneNumber: { type: String, required: true, default: "1234567890" },
    parentalControls: { type: Boolean, required: true, default: false },
  },
});

module.exports = mongoose.model("User", UserSchema);
