const config = require('./config');//uses config.js which maybe uses env variables
let { Sequelize, Model, DataTypes } = require('sequelize');

const isProduction = process.env.NODE_ENV === 'production';

let sequelize = new Sequelize( isProduction ? process.env.DATABASE_URL : config.database, config.username, config.password, {
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
        ssl: {require: true}
    },
    define: {
        freezeTableName: true
    }
});

//host is missing

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
