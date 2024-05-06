/* const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
*/
const { user } = require("../db_connect");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { Sequelize } = require("sequelize");
require("dotenv").config();

/* const fsPromises = require('fs').promises;
const path = require('path');
*/

// console.log(process.env.ACCESS_TOKEN_SECRET);
// console.log(process.env.REFRESH_TOKEN_SECRET);

const handleLogin = async (req, res) => {
  // const { user, pwd } = req.body;
  const { identifier, password } = req.body;
  if (!identifier || !password)
    return res
      .status(400)
      .json({ message: "Username/email and password are required." });

  try {
    // find by username or email
    const userRecord = await user.findOne({
      where: {
        [Sequelize.Op.or]: [{ username: identifier }, { email: identifier }],
      },
    });
    if (!userRecord) return res.sendStatus(401); //unautthorized

    //verify pass
    const match = await bcrypt.compare(password, userRecord.password);
    if (match) {
      // create JWTs
      const accessToken = jwt.sign(
        {
          id: userRecord.id,
          username: userRecord.username,
          email: userRecord.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );
      const refreshToken = jwt.sign(
        {
          id: userRecord.id,
          username: userRecord.username,
          email: userRecord.email,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "60s" }
      );

      //save token w current user
      userRecord.refreshToken = refreshToken;
      await userRecord.save();

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        sameSite: "None",
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
      }); //rjaha true mbaad (false just teste)
      res.json({ accessToken });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  /*

    //query by email or username
    const query = 'SELECT * FROM users WHERE username = ? or email = ?';
    db.query(query, [identifier, identifier], async (err, results) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        if (results.length === 0) {
            return res.sendStatus(401); //unauthorized
        }

        const user = results[0];
        
        // verify password
        const match = await bcrypt.compare(pwd, user.password);
        if (match) {
            // create JWTs
            const accessToken = jwt.sign(
                { id: user.id, username: user.username, email: user.email },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '15m' }
            );
            const refreshToken = jwt.sign(
                { id: user.id, username: user.username, email: user.email },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '60s' }
            );
            // Saving refreshToken db with current user
            const query = 'UPDATE users SET refreshToken = ? WHERE id = ?';
            db.query(query, [refreshToken, user.id], (err) => {
                if (err) {
                    return res.status(500).json({ 'message': err.message })
                }
            res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: false, maxAge: 24 * 60 * 60 * 1000 }); //rjaha true mbaad (false just teste)
            res.json({ accessToken }); 
            });
        } else {
           // res.json({ 'success' : `User ${user} is logged in!`})
            res.sendStatus(401);
        }
    });
    */
  /*
    const foundUser = usersDB.users.find(person => person.username === user);
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        // create JWTs
        const accessToken = jwt.sign(
            { "username": foundUser.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '60s' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '60s' }
        );
        // Saving refreshToken with current user
        const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);
        const currentUser = { ...foundUser, refreshToken };
        usersDB.setUsers([...otherUsers, currentUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: false, maxAge: 24 * 60 * 60 * 1000 }); //rjaha true mbaad (false just teste)
        res.json({ accessToken }); 
       // res.json({ 'success' : `User ${user} is logged in!`})
    } else {
        res.sendStatus(401);
    }

    */
};

module.exports = { handleLogin };
