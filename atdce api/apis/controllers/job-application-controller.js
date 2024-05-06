const pool = require('../db_connect.js');

const applicationSubmit = ( req, res ) => {
    const { cand_name, cand_email, resume_path } = req.body;

    const candidateCheck = 'SELECT id FROM job_candidate WHERE cand_email = ?';
    pool.query( candidateCheck, cand_email, (error, candResult) => {
        if (error) {
            console.error('Error checking for the candidate', error);
            res.status(500).send('Error submitting the application');
        }

        let candidateId;
        if (candResult.length > 0) { // maaeneha if it exists
            candidateId = candResult[0].id; //nekhou l id mteeou
            addApplication(candidateId, jobId, res)
        } else { // if cand doesnt exist
            const insertCandidateQuery = 'INSERT INTO job_candidate (cand_name, cand_email, resume_path) VALUES (?, ?, ?)';
            pool.query(insertCandidateQuery, [cand_name, cand_email, resume_path], (error, insertCandidateResult) => {
                if (error) {
                    console.error('Error inserting new candidate', error);
                    res.status(500).send('Error submitting job application');
                }
                candidateId = insertCandidateResult.insertId;
                addApplication(candidateId, jobId, res);
            });
        }
    });
}

    const addApplication = ( candidateId, jobId, res ) => {
        const query = 'INSERT INTO application (cand_id, job_id, resume_path) VALUES (?, ?, ?)';
        pool.query(query, [candidateId, jobId], (error, addApplicationResult) =>{
            if (error) {
                console.error('Error adding job application');
                res.status(500).send('Error submitting job application')
            } else {
                console.log('Job application has been added succesfully');
                res.status(200).json({ status: 'success', message: 'Application submitted successfully'});
            }
        });
    };

    module.exports = { applicationSubmit };
