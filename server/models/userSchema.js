const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretkey = process.env.KEY;

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

userSchema.methods.getJWT = async function () {
  try {
    const secretkey = process.env.KEY;
    let token = jwt.sign({ _id: this._id }, secretkey);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const USER = new mongoose.model("USER", userSchema);

module.exports = USER;
