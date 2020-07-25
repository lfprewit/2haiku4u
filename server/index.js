const config = require('./config');//uses config.js which maybe uses env variables
let { Sequelize, Model, DataTypes } = require('sequelize');

let sequelize = new Sequelize('postgres://efneamdo:d9YqZ-j0v6M_Ia_VlrJo2JggEkI0paj0@ruby.db.elephantsql.com:5432/efneamdo', {
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
        ssl: {require: true}
    },
    define: {
        freezeTableName: true
    }
});

// let sequelize = new Sequelize(config.database, config.username, config.password, {
//     host: config.host,
//     dialect: 'postgres',
//     ssl: true,
//     dialectOptions: {
//         ssl: {require: true}
//     },
//     define: {
//         freezeTableName: true
//     }
// });

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
