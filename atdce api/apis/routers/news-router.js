const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { reqValidation, NewsValidation } = require('../validators_mw.js');
const { getNews, get1News, createNews, updateNews, deleteNews } = require('../controllers/news-controller.js');

router.get('/', getNews);
router.get('/:id', get1News);
router.post('/', NewsValidation, reqValidation, createNews);
router.put('/:id', NewsValidation, reqValidation, updateNews);
router.delete('/:id', deleteNews);

module.exports = router;