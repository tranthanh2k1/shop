const express = require("express");
const { listUser } = require("../controllers/user");

const router = express.Router();

router.get("/user/list", listUser);

module.exports = router;
