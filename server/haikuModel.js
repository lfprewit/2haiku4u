module.exports = function(sequelize, DataTypes) {

return sequelize.define('haiku', {
    rowone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rowtwo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rowthree: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{timestamps: false});

};
