const pool = require('../db_connect.js');

const getPartners = ( req, res ) => {
  const sql = 'SELECT * from partner';
  pool.query(sql, (error, result) => {
      if (error) {
          console.error(error);
          res.status(500).send('Error getting partners from the database')
      } else {
          res.json(result)
      }
  });
};

//bl wahda
const getPartner = ( req, res ) => {
  const partnerId = req.params.id;
  const sql = 'SELECT * FROM partner where part_id = ?';
  pool.query(sql, [partnerId], (error, result) => {
      if (error) {
          console.error(error);
          res.status(500).send('Error getting the partner from the database');
      }
      else if (result.length === 0) {
        res.status(404).json({ message: 'Partner with this id was not found'})
    }
    else {
        res.json(result[0]);
    }
  });
};

const createPartner = ( req, res ) => {

    const { part_name, part_email, part_phone, part_address, part_website, description } = req.body;
    const newPartner = { part_name, part_email, part_phone, part_address, part_website, description };
    
    const sql = 'INSERT INTO Partner SET ?';
    pool.query(sql, newPartner, (error) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error creating partner');
      } else {
        res.status(200).json( { status: 'success', message: 'Partner created successfully!'});
      }
    });
};

const updatePartner = ( req, res ) => {

    const partnerId = req.params.id;
    const { part_name, part_email, part_phone, part_address, part_website, description } = req.body;
    const updatedPartner = { part_name, part_email, part_phone, part_address, part_website, description };

    const sql = 'UPDATE Partner SET ? WHERE part_id = ?';
    pool.query(sql, [updatedPartner, partnerId], (error) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error updating partner');
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Partner not found'})
    }
    {
        res.status(200).json({ status: 'success', message: 'Partner updated successfully!'});
    }
    });
};

const deletePartner = ( req, res ) => {
    const partnerId = req.params.id;

    const sql = 'DELETE FROM Partner WHERE part_id = ?';
    pool.query(sql , partnerId, (error) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error deleting partner');
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Partner not found'})
    }
    res.status(200).json({ status: 'success', messasge: 'Partner deleted successfully!'});
    });
};

module.exports = {
    getPartners,
    getPartner,
    createPartner,
    updatePartner,
    deletePartner
};