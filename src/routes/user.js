const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

const userController = require("../controllers/userController");

// router
//   .route("/")
//   .get(userController.getAllUser)
//   .post(userController.createNewUser);

router.post(
  "/singup",
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
  userController.createNewUser
);

router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
  userController.userLogin
);

// router.route("/:id").get(userController.getUserById);
module.exports = router;
