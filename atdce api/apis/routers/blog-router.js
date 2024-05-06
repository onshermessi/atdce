const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { reqValidation, BlogValidation } = require('../validators_mw.js');
const { getBlogs, getBlog, createBlog, updateBlog, deleteBlog } = require('../controllers/blog-controller.js');

router.get('/', getBlogs);
router.get('/:id', getBlog);
router.post('/', BlogValidation, reqValidation, createBlog);
router.put('/:id', BlogValidation, reqValidation, updateBlog);
router.delete('/:id', deleteBlog);


module.exports = router;