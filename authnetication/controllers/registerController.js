/* const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) {this.users = data}
}

const fsPromises = require('fs').promises;
const path = require('path');
*/
const { Sequelize } = require("sequelize");
const { user } = require("../db_connect");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res
      .status(400)
      .json({ message: "Username, email and password are required." });

  try {
    const existingUsername = await user.findOne({
      where: { username: username },
    });
    const existingEmail = await user.findOne({ where: { email: email } });

    if (existingUsername && existingEmail) {
      return res
        .status(409)
        .json({ message: "Username and email already exist" });
    } else if (existingUsername) {
      return res.status(409).json({ message: "Username already exists" });
    } else if (existingEmail) {
      return res.status(409).json({ message: "Email already exists" });
    }
    /* const existingUser = await user.findOne({
      where: {
        [Sequelize.Op.or]: [{ username: username }, { email: email }],
      },
    });
    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(409).json({ message: "Username already exists" });
      } else if (existingUser.email === email) {
        return res.status(409).json({ message: "Email already exists" });
      } else res.status(409).json({ message: "This user exists" });
      // return res.sendStatus(409); //conflict
    }
    */

    //encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    await user.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    res.status(201).json({ success: `New user ${username} created!` });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
