/* const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const fsPromises = require('fs').promises;
const path = require('path');
*/

const { user } = require("../db_connect");

const handleLogout = async (req, res) => {
  // On client, also delete accessToken
  const refreshToken = req.cookies.jwt;

  if (!refreshToken) {
    return res.sendStatus(204); //no content
  }

  try {
    const userRecord = await user.findOne({
      where: { refreshToken: refreshToken },
    });
    if (!userRecord) {
      res.clearCookie("jwt", { httpOnly: true });
      return res.sendStatus(403);
    }

    userRecord.refreshToken = "";
    await userRecord.save();

    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: false }); //secure: true - only servers on https
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  /*
    const query = 'SELECT * FROM users WHERE refreshToken = ?';
    db.query(query, [refreshToken], async (err, results) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        if (results.length === 0) {
            res.clearCookie('jwt', { httpOnly: true });
            return res.sendStatus(403);
        }

        const user = results[0];

        const query = 'UPDATE users SET refreshToken = ? WHERE refreshToken = ?'; 
        db.query(query, ['', refreshToken], async (err) => {
            if (err) {
                return res.status(500).json({ 'message': err.message });
            }
            res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: false}); //secure: true - only servers on https
            res.sendStatus(204);
        });
    });
*/
  /*
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //No content

    const refreshToken = cookies.jwt;

    //is refresh token in db?
    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
    if (!foundUser){
        res.clearCookie('jwt', { httpOnly: true })
        return res.sendStatus(403);
    }

    //delete refresh token in db
    const otherUsers = usersDB.users.filter(person => person.refreshToken !== foundUser.refreshToken);
    const currentUser = { ...foundUser, refreshToken: '' };
    usersDB.setUsers([...otherUsers, currentUser]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'users.json'),
        JSON.stringify(usersDB.users)
    );

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: false}); //secure: true - only servers on https
    res.sendStatus(204);
    */
};

module.exports = { handleLogout };
