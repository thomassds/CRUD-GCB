const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Doctor = require('../models/Doctor');
const Spec = require('../models/Spec');

const connection = new Sequelize(dbConfig);

Doctor.init(connection);
Spec.init(connection);


Doctor.associate(connection.models);
Spec.associate(connection.models);

module.exports = connection;