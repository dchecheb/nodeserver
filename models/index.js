const Sequelize = require('sequelize');
const MovieInfo = require('./movie_info');
const User = require('./user');
const MovieReview = require('./movie_review');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, process.env.TEMPKEY, config);

// set sequelize
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// init tables
db.MovieInfo = MovieInfo;
db.User = User;
db.MovieReview = MovieReview;
MovieInfo.init(sequelize);
User.init(sequelize);
MovieReview.init(sequelize);
MovieInfo.associate(db);
User.associate(db);
MovieReview.associate(db);

// export
module.exports = db;
