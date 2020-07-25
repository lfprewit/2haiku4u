const config = require('./config');//uses config.js which maybe uses env variables
let { Sequelize, Model, DataTypes } = require('sequelize');

let sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'postgres',
    define: {
        freezeTableName: true
    }
});

//load models
const models = [
    'haikuModel'
];

const path = require('path');

models.forEach(function(model) {
    module.exports[model] = require(path.join(__dirname, model))(sequelize, Sequelize);
    sequelize[model.name] = model;
});

//export connection
module.exports.sequelize = sequelize;
