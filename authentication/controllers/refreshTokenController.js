/* const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
} */
const { user } = require("../db_connect");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleRefreshToken = async (req, res) => {
  const refreshToken = req.cookies.jwt;

  if (!refreshToken) {
    return res.sendStatus(401); //unauthorized
  }
  try {
    //find user by refreshTOKEN
    const foundUser = await user.findOne({
      where: { refreshToken: refreshToken },
    });
    if (!foundUser) return res.sendStatus(403); // forbidden

    //verify refresh token
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err || foundUser.username !== decoded.username)
          return res.sendStatus(403);
        // generate new access token
        const accessToken = jwt.sign(
          { username: decoded.username },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "80s" }
        );
        res.json({ accessToken });
      }
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  /*
//find user with matching refresh token
    const query = 'SELECT * FROM users WHERE refreshToken = ?';
    db.query(query, [refreshToken], (err, results) => {
        if (err) {
            return res.status(500).json({ 'message': err.message});
        }
        if (results.length === 0) {
            return res.sendStatus(403); //forbidden
        }

        const user = results[0];

        //verify refresh token
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                if (err || user.username !== decoded.username) return res.sendStatus(403);
                // generate new access token
                const accessToken = jwt.sign(
                    { "username": decoded.username },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '80s' }
                );
                res.json({ accessToken })
            }
        );
    });
*/
  /*
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
    if (!foundUser) return res.sendStatus(403); //Forbidden 
    // evaluate jwt 
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
            const accessToken = jwt.sign(
                { "username": decoded.username },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '80s' }
            );
            res.json({ accessToken })
        }
    );
*/
};

module.exports = { handleRefreshToken };
