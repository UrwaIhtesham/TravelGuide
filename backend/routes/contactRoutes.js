const express = require("express");
const router = express.Router();
const controller = require("../controllers/contactController");

router.get("/", controller.getContacts); // Read
router.post("/", controller.addContact); // Create
router.put("/:id", controller.editContact); // Update
router.delete("/:id", controller.removeContact); // Delete

module.exports = router;
