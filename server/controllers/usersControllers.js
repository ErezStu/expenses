const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/UserModel.js");

// REGISTER
const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userEmail = await User.findOne({ email });

    if (userEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPass });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

// LOGIN
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "One of the inputs are incorrect." });
    }

    const passValid = await bcrypt.compare(password, user.password);

    if (!passValid) {
      return res
        .status(400)
        .json({ message: "One of the inputs are incorrect." });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({ token, userID: user._id });
  } catch (err) {
    console.log(err);
  }
};

// GET USER INFO

const getUserInfo = async (req, res, next) => {
  try {
    const { userID } = req.params;

    const user = await User.findById(userID);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

exports.createUser = createUser;
exports.loginUser = loginUser;
exports.getUserInfo = getUserInfo;
