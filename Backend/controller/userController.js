const User = require("../module/userModule");
const HttpError = require("../module/Http-error");
const { response } = require("express");

const signin = async (req, res, next) => {
  const { name, email, password, userType } = req.body;

  const newUser = new User({
    name,
    email,
    password,
    userType,
  });

  console.log(newUser);

  let user = await User.findOne({ email: email });
  if (user) {
    return res.status(404).json({ message: "user already exists" });
  }

  try {
    await newUser.save();
    console.log("Product save");
    res.status(200).json({ message: "user signed in successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "user not signed in successfully" });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let user;
  console.log("backend", email, password);
  try {
    user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "some error occured" });
  }
  console.log(user.password);

  if (user.password === password) {
    res.status(200).json("login Successfully ");
  }else{
    res.status(404).json({ message: "invalid password" });
  }
};

exports.signin = signin;
exports.login = login;
