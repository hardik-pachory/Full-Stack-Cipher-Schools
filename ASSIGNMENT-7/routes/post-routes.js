const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const Post = require('../models/post')
const postController = require('../controllers/post-controller');

router.post('/', postController.createPost);

router.get('/', postController.getAllPost);