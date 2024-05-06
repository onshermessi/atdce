const db = require('../db_connect.js');

const getJobs = ( req, res ) => {
    const sql = 'SELECT * FROM job_offer';
    pool.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting job offer from the database')
        } else {
            res.json(result);
        }
    });
};

const getJob = ( req, res ) => {
    const jobId = req.params.id;
    const sql = 'SELECT * FROM job_offer WHERE job_id = ?';
    pool.query(sql, [jobId] , (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error retreiving the job position from the database');
        } else if (result.length === 0) {
            res.status(404).json({ message: 'Job offer with this id was not found'})
        }
        else {
            res.json(result[0]);
        }
    });
};

const addJobOffer = ( req, res ) => {

    const { job_position, description, salary } = req.body;
    const NewJobOffer = { job_position, description, salary };

    const sql = 'INSERT INTO job_offer SET ?';
    pool.query(sql, NewJobOffer, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error adding the job offer');
        } else {
            res.status(200).json({ status: 'success', message: 'Job offer created successfully!' })
        }
    });
};

const updateJobOffer = ( req, res ) => {

    const jobId = req.params.id;
    const { job_position, description, salary } = req.body;
    const updatedJobOffer = { job_position, description, salary };

    const sql = 'UPDATE job_offer SET ? WHERE job_id = ?';
    pool.query(sql, [updatedJobOffer, jobId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error updating the job offer');
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Job position not found'})
        }
        res.status(200).json({ status: 'success', message: 'Job offer updated successfully'});
    });
};

const deleteJobOffer = ( req, res ) => {
    const jobId = req.params.id;

    const sql = 'DELETE FROM job_offer WHERE job_id = ?';
    pool.query(sql, jobId, (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error deleting the job offer')
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Candidate not found'})
        }
            res.status(200).json({ status: 'success', message:'Job position deleted successfully'});
    });
};

module.exports = {
    addJobOffer,
    updateJobOffer,
    deleteJobOffer,
}
