// ORM stuff
// var orm = require("../config/orm.js");

// var burger = {
// 	selectAll: function(callback) {
// 		orm.selectAll("burgers", callback);
// 	},
// 	insertOne: function(burger, callback) {
//     	orm.insertOne("burgers", burger, callback);
//   	},
//   	updateOne: function(condition, burger, callback) {
//         orm.updateOne("burgers", condition, burger, callback);
//     }
// };

// module.exports = burger;

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
		// ,
		// {
		// 	classMethods: {
		// 		associate:  function(models) {
		// 			Burger.hasMany(models.Post, {
		// 				onDelete: "cascade"
		// 			});
		// 		}
		// 	}	
		// }
	);

	return Burger;
}