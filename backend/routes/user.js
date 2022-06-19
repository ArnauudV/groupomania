const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const userCtrl = require("../controllers/user");
const userReq = require("../requests/userReq");
const checkInputs = require("../middlewares/checkInputs");
const checkUser = require("../middlewares/user");



router.post(
  "/Signup",
  checkInputs.checkSignupFormInputs,
  userReq.requestSignupForm,
  userCtrl.SignupForm
);

router.post(
  "/Login",
  checkInputs.checkLoginFormInputs,
  userReq.requestLoginForm,
  userCtrl.LoginForm
);


module.exports = router;
