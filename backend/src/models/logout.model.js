const mongoose = require("mongoose");

const logoutTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const tokenModel= mongoose.model(
  "LogoutToken",
  logoutTokenSchema
);

module.exports = tokenModel     