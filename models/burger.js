module.exports = function(sequelize, DataTypes){
    var Burger = sequelize.define("burgers", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
}