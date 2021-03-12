const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, process.env.TEMPKEY, config);
}

db.sequelize = sequelize;

// connect to mysql
sequelize.sync({ force: false})
    .then(() => {
        console.log('MySQL connection successful.');
    })
    .catch((err) => {
        console.error(err);
    });
    
module.exports = db;
