const { Sequelize } = require("sequelize");
const { user } = require("../db_connect");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// jdid
const createToken = (userId) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  return jwt.sign({ userId }, jwtSecretKey, { expiresIn: "3d" });
};

const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "",
    pass: "",
  },
});
const sendVerificationEmail = async (email, token) => {
  //send email verif link
  const verificationLink = `https://localhost:3500/verify/{token}`; //hotha baad
  await transporter.sendMail({
    from: "",
    to: email, // receiver
    subject: "Email Verification",
    html: `Click <a href="${verificationLink}">here</a> to verify your email.`,
  });
};

const verifyEmail = async (req, res) => {
  const emailToken = req.query.emailToken;
  if (!emailToken)
    return res.status(400).json({ message: "Token is required" });

  try {
    // find user by token
    const existingUser = await user.findOne({
      where: { emailToken: emailToken },
    });

    if (!existingUser) {
      return res.status(404).json({ message: "Invalid or expired token" });
    }

    //update user as verified
    await user.update(
      { isVerified: true, emailToken: null },
      { where: { id: existingUser.id } }
    );

    const token = createToken(existingUser.id);

    res.status(200).json({
      message: "Email verified successfully",
      id: existingUser.id,
      username: existingUser.username,
      email: existingUser.email,
      token,
      isVerified: existingUser.isVerified,
    });
  } catch (error) {
    console.error("Error verifying email", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

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

    //encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(64).toString("hex");

    // create new user
    await user.create({
      username: username,
      email: email,
      password: hashedPassword,
      emailToken: verificationToken,
    });

    //send verf email
    await sendVerificationEmail(email, verificationToken);

    const token = createToken(email);
    res.status(201).json({ success: `New user ${username} created!`, token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
module.exports = { handleNewUser, verifyEmail };
