const express = require('express');
const {registerUser, authUser, allUsers, getPass} = require("../controllers/userControllers");
const router = express.Router();
const {protect} = require("../middleware/authMiddleware")

// can append all dif methods to a route rather than writing a completely new route
router.get('/getPass', getPass);
router.route('/').post(registerUser).get(protect, allUsers);
router.post('/login', authUser);

module.exports = router