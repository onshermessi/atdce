const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { reqValidation, JobOfferValidation } = require('../validators_mw.js');
const { addJobOffer, updateJobOffer, deleteJobOffer } = require('../controllers/job-offer-controller.js');

router.get('/', getJobs);
router.get('/:id', getJob);
router.post('/', JobOfferValidation, reqValidation, addJobOffer);
router.put('/:id', JobOfferValidation, reqValidation, updateJobOffer);
router.delete('/:id', deleteJobOffer);

module.exports = router;