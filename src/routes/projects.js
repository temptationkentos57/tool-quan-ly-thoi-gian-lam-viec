const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name } = req.body;
  const project = new Project({ name });
  await project.save();
  res.status(201).send(project);
});

router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.send(projects);
});

module.exports = router;