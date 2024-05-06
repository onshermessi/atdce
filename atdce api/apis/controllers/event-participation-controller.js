const pool = require('../db_connect.js');

const participationSubmit = ( req, res ) => {
    const { vol_name, vol_email, vol_phone, eventId} = req.body;

    const volunteerCheck = 'SELECT id FROM volunteer WHERE vol_email = ?';
    pool.query( volunteerCheck, vol_email, (error, volResult) => {
        if (error) {
            console.error('Error checking for the volunteer', error);
            res.status(500).send('Error submitting the application');
        } else {
        let volunteerId;
        if (volResult.length > 0) { // maaeneha if it exists
            volunteerId = volResult[0].id; //nekhou l id mteeou
            addParticipation(volunteerId, eventId, res)
        } else { // if vol doesnt exist
            const insertVolunteerQuery = 'INSERT INTO volunteer (vol_name, vol_email, vol_phone) VALUES (?, ?, ?)';
            pool.query(insertVolunteerQuery, [vol_name, vol_email, vol_phone], (error, insertVolunteerResult) => {
                if (error) {
                    console.error('Error inserting new volunteer', error);
                    res.status(500).send('Error submitting event participation application');
                }
                volunteerId = insertVolunteerResult.insertId;
                addParticipation(volunteerId, eventId, res);
            });
        }
    }
    });
}

    const addParticipation = ( volunteerId, eventId, res ) => {
        const query = 'INSERT INTO event_participation (event_id, vol_id) VALUES (?, ?)';
        pool.query(query, [eventId, volunteerId], (error, addParticipationResult) =>{
            if (error) {
                console.error('Error adding event participation application');
                res.status(500).send('Error submitting event participation application')
            } else {
                console.log('Event participation application has been added succesfully');
                res.status(200).json({ status: 'success', message: 'Event participation application submitted successfully'});
            }
        });
    };

    module.exports = { participationSubmit };
