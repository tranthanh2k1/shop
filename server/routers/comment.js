const express = require('express');
const { create, list, remove, update } = require("../controllers/comment");
const router = express.Router();

router.post('/comment', create);
router.get("/comment", list);
router.put("/comment",update);
router.delete("/comment", remove);

module.exports = router;