const pool = require('../db_connect.js');

const getVolunteers = ( req, res ) => {
    const sql = 'SELECT * FROM volunteer';
    pool.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting volunteers from the database')
        } else {
            res.json(result);
        }
    });
};

const getVolunteer = ( req, res ) => {
    const volId = req.params.id;
    const sql = 'SELECT * FROM volunteer WHERE vol_id = ?';
    pool.query(sql, [volId] , (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error retreiving the volunteer from the database');
        } else if (result.length === 0) {
            res.status(404).json({ message: 'Volunteer with this id was not found'})
        }
        else {
            res.json(result[0]);
        }
    });
};

const createVolunteer = ( req, res ) => {

    const { vol_id, vol_name, vol_email, vol_phone, message } = req.body; //fl base de donnees zid champ message
    const newVolunteer = { vol_id, vol_name, vol_email, vol_phone, message };

    const sql = 'INSERT INTO volunteer SET';
    pool.query(sql, newVolunteer, (error) => {
        if (error) {
            console.error('There has been an error creating volunteer', error);
            res.status(500).send('Error creating volunteer');
        } else {
            res.status(200).json({ status: 'success', message: 'Volunteer created successfully'})
        }
    });
};

const updateVolunteer = ( req, res ) => {

    const volId = req.params.id;
    const { vol_id, vol_name, vol_email, vol_phone, message } = req.body;
    updatedVolunteer = { vol_id, vol_name, vol_email, vol_phone, message };

    const sql = 'UPDATE volunteer SET ? WHERE vol_id = ?';
    pool.query(sql, [updatedVolunteer, volId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error updating volunteer');
          }
          if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Volunteer not found'})
          }
            res.status(200).json({ status: 'success', message: 'Volunteer updated successfully'});
        });
};

const deleteVolunteer = ( req, res ) => {
    const volId = req.params.id;

    const sql = 'DELETE FROM volunteer WHERE vol_id = ?';
    pool.query(sql, volId, (error) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error deleting volunteer');
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Volunteer not found'})
      }
        res.status(200).json({ status: 'success', message:'Volunteer deleted successfully'});
    });
};

module.exports = {
    getVolunteers,
    getVolunteer,
    createVolunteer,
    updateVolunteer,
    deleteVolunteer
};