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
};

module.exports = { handleLogin };
