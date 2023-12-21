const mongoose = require("mongoose");


const adminSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: { type: String },
    isLoggedIn: { type: Boolean, default: false },
  }
);


const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;