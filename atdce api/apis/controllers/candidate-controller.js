const pool = require('../db_connect.js');

const getCandidates = ( req, res ) => {
    const sql = 'SELECT * FROM job_candidate';
    pool.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting candidates from the database')
        } else {
            res.json(result);
        }
    });
};

const getCandidate = ( req, res ) => {
    const candId = req.params.id;
    const sql = 'SELECT * FROM job_candidates WHERE cand_id = ?';
    pool.query(sql, [candId] , (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error retreiving the candidate from the database');
        } else if (result.length === 0) {
            res.status(404).json({ message: 'Candidate with this id was not found'})
        }
        // result.length heya kadeh mn rows fl sql
        else {
            res.json(result[0]);
        }
    });
};

const createCandidate = ( req, res ) => {
   
    const { cand_id, cand_name, cand_email, message } = req.body;
    const newCandidate = { cand_id, cand_name, cand_email, message }; //zid champ phone mysql

    const sql = 'INSERT INTO job_candidate SET';
    pool.query(sql, newCandidate, (error) => {
        if (error) {
            console.error('There has been an error creating candidate', error);
            res.status(500).send('Error creating candidate');
        } else {
            res.status(200).json({ status: 'success', message: 'Candidate created successfully'})
        }
    });
};

const updateCandidate = ( req, res ) => {
   
    const candId = req.params.id;
    const { cand_id, cand_name, cand_email, message } = req.body;
    updatedCandidate = { cand_id, cand_name, cand_email, message };

    const sql = 'UPDATE job_candidate SET ? WHERE cand_id = ?';
    pool.query(sql, [updatedCandidate, candId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error updating candidate');
          }
          if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Candidate not found'})
          }
            res.status(200).json({ status: 'success', message: 'Candidate updated successfully'});
        });
};

const deleteCandidate = ( req, res ) => {
    const candId = req.params.id;

    const sql = 'DELETE FROM job_candidate WHERE cand_id = ?';
    pool.query(sql, candId, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error deleting candidate');
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Candidate not found'})
      }
        res.status(200).json({ status: 'success', message:'Candidate deleted successfully'});
    });
};

module.exports = {
    getCandidates,
    getCandidate,
    createCandidate,
    updateCandidate,
    deleteCandidate
};