const router = require("express").Router();
const User = require("../modals/User");
const bcrypt = require("bcrypt");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create user
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    //   save user
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("User not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(404).json("Invalid password");
    res.send(200).json("User found");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
