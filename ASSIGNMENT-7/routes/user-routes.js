// Other libraries importing
const express = require('express');

// Self created functions/files/classes
const userController = require('../controllers/user-controller');
const checkAuth = require('../middlewares/check-auth');

const router = express.Router();


// Unauthenticated
router.post("/signup",  userController.userSignup);
router.post("/login", userController.userLogin);

//Midleware to check authentication
router.use(checkAuth);

// Authenticated routes
router.get("/getInfo/:email", userController.userInfo);
router.post("/createPost", userController.createPost);
router.get("/showPosts", userController.getPosts);

module.exports = router;

