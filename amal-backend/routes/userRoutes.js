const express = require("express");
const router = express.Router();

const {userRegister,getAllUsers, userLogin} = require("../controllers/userController");
// const { userAuth, userAutherisation } = require("../middlewares/auth");


router.route("/register").post(userRegister);
router.route("/all").post(getAllUsers);
router.route("/login").post(userLogin);

module.exports = router;
