const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')
require('dotenv').config()

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  googleId: {
    type: String,
  },
  gitId: {
    type: String,
  },
  facebookId: {
    type: String,
  },
  cvPath: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    validate(val) {
      let password = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
      );
      if (!password.test(val)) {
        throw new Error(
          "password must include uppercase, lowercase, number, special character !@#$%^&*"
        );
      }
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate(val) {
      if (!validator.isEmail(val)) throw new Error("email is invalid");
    },
  },
  tokens: [
    {
      type: String,
      required: true,
    },
  ],
  role: {
    type: String,
    enum: ['mentee', 'mentor'],
    default: 'mentee'
  }
});

userSchema.virtual("messages", {
  ref: "Message",
  foreignField: "sender",
  localField: "_id"
})



userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    const salt = await bcryptjs.genSalt(8);
    this.password = await bcryptjs.hash(this.password, salt);
  }
});

userSchema.methods.generateToken = async function () {
  const user = this
  const token = jwt.sign(
    {
      _id: user._id.toString()
    }, process.env.SECRET_KEY)
  user.tokens = user.tokens.concat(token)
  await user.save()
  return token
}

userSchema.methods.sendEmail = function sendEmail(email, title, text) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: process.env.MAIL_EMAIL,
    to: email || "example@gmail.com",
    subject: title || "mentors project",
    html: text || "Hello, from your mentors project",
  };

  transporter.sendMail(mailOptions, function (err, res) {
    if (err) {
      throw new Error(err);
    }
  });
}

userSchema.methods.toJson = function () {
  const userObject = this.toObject(); //important to convert document to object
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

// Login
userSchema.statics.findByCredentials = async (mail, pass) => {
  const user = await User.findOne({ email: mail });
  if (!user) {
    throw new Error("Incorrect Email or Password!, Please check again..")
  }
  const isMatch = await bcryptjs.compare(pass, user.password)
  if (!isMatch) {
    throw new Error("Incorrect Email or Password!, Please check again..")
  }
  return user
}

const User = mongoose.model("User", userSchema);
module.exports = User;