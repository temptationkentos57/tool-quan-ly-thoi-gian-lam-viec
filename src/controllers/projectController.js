// Controller để xử lý logic cho dự án

const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  try {
    const { name } = req.body;
    const project = new Project({ name });
    await project.save();
    res.status(201).send(project);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.send(projects);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};