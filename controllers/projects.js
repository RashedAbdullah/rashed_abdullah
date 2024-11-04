const { mongoDBConnection } = require("@/database/mongoDBConnection");
const { projectModel } = require("@/models/project-model");

const getProjects = async () => {
  try {
    await mongoDBConnection();
    const projects = await projectModel.find({}).sort({ createdAt: -1 });
    return projects;
  } catch (err) {
    console.log(err.message);
  }
};

const createProject = async (project) => {
  try {
    await mongoDBConnection();
    const newProject = projectModel.create(project);
    return newProject;
  } catch (err) {
    console.log(err.message);
  }
};

export { getProjects, createProject };
