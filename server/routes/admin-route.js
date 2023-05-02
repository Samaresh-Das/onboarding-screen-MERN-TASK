const express = require("express");
const router = express.Router();
const fileUpload = require("../middleware/file-upload");
const adminController = require("../controllers/adminController");
const { check } = require("express-validator");

router.get("/adminData", adminController.getAdminData);

router.post(
  "/updateForm",
  fileUpload.single("image"),
  adminController.adminUpdateForm
);

router.post(
  "/postData",
  [check("name").not().isEmpty(), check("email").normalizeEmail().isEmail()],
  adminController.postData
);
router.get("/getData", adminController.getData);

module.exports = router;
