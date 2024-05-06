const { Sequelize } = require('sequelize');

// sequelize instance
const sequelize = new Sequelize('atdce', 'root', 'password', { host: 'localhost', dialect: 'mysql'});

// defining models
const user = sequelize.define('user', {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    refreshToken: Sequelize.STRING
});

sequelize.sync({ force: true })
.then(() => {
    console.log('Database synced successfully!');
})
.catch((error) => {
    console.error('Error syncing database:', error);
});

module.exports = { sequelize, user}