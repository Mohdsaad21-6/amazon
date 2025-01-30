const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    minLength: 3,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    validate(value) {
      if (!validator.isStrongPassword(value)) {
        throw new Error("Password is not strong");
      }
    },
  },
  cpassword: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  carts: Array,
});

userSchema.pre("save", async function (next) {
    const user = this;
  
    hashpassword = await bcrypt.hash(user.password, 12);
    hashcpassword = await bcrypt.hash(user.cpassword, 12);
  
    if (user.isModified("password")) {
      user.password = hashpassword;
      user.cpassword = hashcpassword;
    }
      next();
  });


const USER = new mongoose.model("USER", userSchema);

module.exports = USER;


