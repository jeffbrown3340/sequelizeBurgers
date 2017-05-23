var connection = require("./connection.js");

// Object Relational Mapper
var orm = {
	selectAll: function(tableName, callback) {
		// console.log("orm tableName=", tableName);
		connection.query(
			"SELECT * FROM ??",
			[tableName],
			function(err, result) {
				if(err) throw err;
				// console.log("orm result = ", result);
				callback(result);
			}
		);
	},
	insertOne: function(tableName, obj, callback) {
	    connection.query(
	        "INSERT INTO ?? SET ?", 
	        [tableName, obj], 
	        function(err, result) {
	            if(err) throw err;
	            callback(result);
	        }
	    );
	},
	updateOne: function(tableName, condition, obj, callback) {
	    connection.query(
	        "UPDATE ?? SET ? WHERE ?",
	        [tableName, obj, condition],
	        function(err, result) {
	            if(err) throw err;
	            callback(result);
	        }
	    );
	}
};

module.exports = orm;
