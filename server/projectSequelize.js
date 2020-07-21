const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('Haiku', 'postgres', '9999ball', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        freezeTableName: true
    }
  });


// //CHECK FOR CONNECTION
// async function testSql () {
//   try {
//       await sequelize.authenticate();
//       console.log('Connection established');
//   } catch (error) {
//       console.error('Unable to connect to the database', error);
//   }
// };
// testSql();

const Haiku = sequelize.define('Haiku', {
    rowOne: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rowTwo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rowThree: {
        type: DataTypes.STRING,
        allowNull: false
    },
    score: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

console.log(Haiku === sequelize.models.Haiku);

Haiku.create({ rowOne: 'An old silent pond...', rowTwo: 'A frog jumps into the pond,', rowThree: 'splash! Silence again.' })
.then(console.log);

//This creates the table, dropping it first if it already existed
(async () => {
    await sequelize.sync();
    console.log("The table for the Haiku model was just (re)created!");
  })();

