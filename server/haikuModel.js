module.exports = function(sequelize, DataTypes) {

return sequelize.define('haiku', {
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

};
