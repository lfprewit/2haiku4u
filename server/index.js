const Sequelize = require('sequelize');

const sequelize = new Sequelize('Haiku', 'postgres', '9999ball', {
    host: 'localhost',
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
