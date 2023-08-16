const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  // Strictly for UX/UI preferences
  preferences: {
    type: [
      {
        type: String,
      },
    ],
    required: true,
  },
  profile: {
    userName: { type: String, required: true },
    favoriteGenre: { type: [{ type: String }] },

    //Links to the ID of each of the users favorite author
    //Placeholder for now
    favoriteAuthors: { type: [{ type: Number }] },
    // TODO: Figure out what to do here
    socials: {},
  },
  accountDetails: {
    //Will be populated by default values
    paidUser: { type: Boolean, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    region: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    parentalControls: { type: Boolean, required: true },
    paymentMethods: { type: [{ type: Object }] },
    transactionHistory: { type: [{ type: Object }] },
  },
});

module.exports = mongoose.model("User", UserSchema);
