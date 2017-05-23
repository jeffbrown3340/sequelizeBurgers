var orm = require("../config/orm.js");

var burger = {
	selectAll: function(callback) {
		orm.selectAll("burgers", callback);
	},
	insertOne: function(burger, callback) {
    	orm.insertOne("burgers", burger, callback);
  	},
  	updateOne: function(condition, burger, callback) {
        orm.updateOne("burgers", condition, burger, callback);
    }
};

module.exports = burger;