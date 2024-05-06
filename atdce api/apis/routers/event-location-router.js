const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { reqValidation, LocationValidation  } = require('../validators_mw');
const { getLocations, getLocation, createLocation, updateLocation, deleteLocation } = require('../controllers/event-location-controller');

router.get('/', getLocations);
router.get('/:id', getLocation);
router.post('/', LocationValidation, reqValidation, createLocation);
router.put('/:id', LocationValidation, reqValidation, updateLocation);
router.delete('/:id', deleteLocation);


module.exports = router;