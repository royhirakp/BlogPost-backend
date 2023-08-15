const bcrypt = require("bcrypt");
const jsw = require("jsonwebtoken");
const User = require("../models/user");

exports.createNewUser = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    let user = await User.findByEmail(email);
    if (user[0].length == 1 || user[0].length > 1)
      res.status(409).json({ messege: "user already exist" });
    else {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) return res.status(500).json({ status: " bicript failed" });
        user = new User(email, hash);
        user = await user.save();
        res.status(201).json({
          status: "sucess",
          messege: "new user created",
        });
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "singup faled!!!",
      messege: error,
    });
  }
};

exports.userLogin = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    let user = await User.findByEmail(email);
    if (user[0].length == 0) res.status(404).json({ msg: "user not found" });
    else {
      // test the encripted password
      let result = await bcrypt.compare(password, user[0][0].password);
      if (result) {
        // Password matches, create a token
        const token = jsw.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: user[0][0].id, //
          },
          "hirak"
          // process.env.JWTKEY
        );
        res.json({
          status: "sucesess",
          messege: "user login sucessfull",
          token,
        });
      } else {
        res.status(401).json({
          status: "Unauthorized",
          messege: "password not matched",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      status: "login faled!!!",
      messege: error,
    });
  }
};

exports.getAllUser = async (req, res, next) => {
  try {
    const user = await User.findAll();
    res.status(200).json({ data: user[0] });
  } catch (error) {
    console.log(error);
    // next(error)
  }
};

// exports.findByEmail = async (req, res, next) => {
//   try {
//     console.log(req.params.id, "req.params.id");
//     let user = await User.findById(req.params.id);

//     res.status(200).json({ user: user[0] });
//   } catch (error) {
//     console.log(error);
//   }
// };
