const express = require("express");
const router = express.Router();

const { register, login,  forgotPassword, changepassword} = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);

router.post('/forgot-password', forgotPassword);
router.post('/change-password', changepassword);


module.exports = router;
