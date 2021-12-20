const express = require('express');
const {
    createContact,
    listContact,
    detailContact,
    updateContactStatusAdmin,
    listAllContactStatus
} = require("../controllers/contact.js")
const { verifyToken , isAdmin } = require("../middleware/auth.js");
const router = express.Router();

// admin
router.get('/listContact', listContact);
router.get('/detailContact/:id', detailContact);
router.put("/contact/updateStatus/:contactId", verifyToken, isAdmin, updateContactStatusAdmin);
router.post("/contact/status", listAllContactStatus);
//customer
router.post('/contact', createContact);