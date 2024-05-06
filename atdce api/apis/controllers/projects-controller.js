const pool = require('../db_connect.js');


const getProjects = ( req, res) => {
    const sql= 'SELECT * from project';
    pool.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting projects from the database')
        } else {
            res.json(result)
        }
    });
};

//bl wahda
const getProject = ( req, res ) => {
    const projectId = req.params.id;
    const sql = 'SELECT * FROM project where project_id = ?';
    pool.query(sql, [projectId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting the project from the database');
        } else if ( result.length === 0 ) {
            res.status(400).json({ message: 'Project with this id was not found'});
        } else {
            res.json(result[0]);
        }
    });
};

const createProject = ( req, res ) => {

    const {project_id, project_name, description, project_url} = req.body;
    const newProject = {project_id, project_name, description, project_url};

    const sql = 'INSERT INTO project SET ?';
    pool.query(sql, newProject, (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error creating project');
        } else {
            res.status(200).json( { status: 'success', message: 'Project created successfully!'});
        }
    });
};

const updateProject = ( req, res ) => {

    const projectId = req.params.id;
    const {project_id, project_name, description, project_url} = req.body;
    const updatedProject = {project_id, project_name, description, project_url};

    const sql = 'UPDATE project SET ? WHERE project_id = ?';
    pool.query(sql, [updatedProject, projectId] , (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error updating project');
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Project not found'})
        }
            res.status(200).json({ status: 'success', message: 'Project updated successfully!'});
    });
};

const deleteProject = ( req, res ) => {
    const projectId = req.params.id;

    const sql = 'DELETE FROM project WHERE project_id = ?';
    pool.query(sql, projectId, (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error deleting Project');
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Project not found'})
        }
        res.status(200).json({ status: 'success', messasge: 'Project deleted successfully!'});
    });
};

module.exports = {
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject
};