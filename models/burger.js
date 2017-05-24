// 5-20-2017 SQLZ stuff
module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define(
		"Burger", 
		{
			burger_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			devoured: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false
				}
		}
	);

	return Burger;
}