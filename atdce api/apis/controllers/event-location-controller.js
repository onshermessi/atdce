const { error } = require('console');
const pool = require('../db_connect.js');

const getLocations = ( req, res) => {
    const sql = 'SELECT * from event_location';
    pool.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting locations from the database')
        } else {
            res.json(result)
        }
    });
};

const getLocation = ( req, res ) => {
    const locationId = req.params.id;

    const sql = 'SELECT * FROM event_location where location_id = ?';
    pool.query(sql, [locationId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting the location from the database');
        } else if ( result.length === 0 ) {
            res.status(404).json({ message: 'Location with this id was not found'});
        } else {
            res.json(result[0]);
        }
    });
};

const createLocation = ( req, res ) => {
    const {location_name, event_id} = req.body;

    const checkLocation = 'SELECT * FROM event_location WHERE location_name = ?';
    pool.query(checkLocation, [location_name], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error checking for the location');
        } else {
            if (result.length === 0) { //if doesnt exist
                const newLocation = {location_name};
                const createLocationQuery = 'INSERT INTO event_location SET ?';
                pool.query(createLocationQuery, newLocation, [event_id], (error, result) => {
                    if (error) {
                        console.error(error);
                        res.status(500).send('Error adding new location')
                    } else { //nhotou event with new location
                        const locationId = result.insertId;
                        const updateQuery = 'UPDATE event_location SET location_id = ? WHERE event_id = ?';
                        pool.query(updateQuery, [locationId, event_id], (error) => {
                            if (error) {
                                console.error(error);
                                res.status(500).send('Error associating event with the new location');
                            } else {
                                res.status(200).json({ status: 'success', message: 'Location created and associated with event successfully'})
                            }
                        });
                    }
                });
            } else {
                const locationId = result[0].location_id;
                const updateQuery = 'UPDATE event_location SET location_id = ? WHERE event_id = ?';
                pool.query(updateQuery, [locationId, event_id], (error) => {
                    if (error) {
                        console.error(error);
                        res.status(500).send('Error associating event with location')
                    } else {
                        res.status(200).json({ status: 'success', message: 'Event associated with exisitng location successfully'});
                    }
                })
            }
        }
    })
}

const updateLocation = ( req, res ) => {
    const locationId = req.params.id;
    const { location_name} = req.body;
    const updatedLocation = { location_name };

    const sql = 'UPDATE event_location SET ? WHERE location_id = ?';
    pool.query(sql, [updatedLocation, locationId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error updating location');
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Event location not found'})
        }
        res.status(200).json({ status: 'success', message: 'Event location updated successfully'})
    });
};

const deleteLocation = ( req, res ) => {
    const locationId = req.params.id;

    const sql = 'DELETE FROM event_location WHERE location_id = ?';
    pool.query(sql, locationId, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error deleting location');
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Event location not found'})
        }
        res.status(200).json({ status: 'success', message: 'Event location deleted successfully'})
    });
}

module.exports = {
    getLocations,
    getLocation,
    createLocation,
    updateLocation,
    deleteLocation
}