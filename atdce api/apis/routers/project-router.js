const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { reqValidation, ProjectValidation } = require('../validators_mw.js');
const { getProjects, getProject, createProject, updateProject, deleteProject } = require('../controllers/projects-controller.js');

router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', ProjectValidation, reqValidation, createProject);
router.put('/:id', ProjectValidation, reqValidation, updateProject);
router.delete('/:id', deleteProject);

module.exports = router;