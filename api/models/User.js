/**
* api/models/User.js
*
* This module defines a model, exporting an object.
* Thanks to `sandboxed-module`, the `Sequelize` object containing data types
* is injected to the module. 
*
* The attributes are defined in the exports.attributes object, options in
* module.exports without attributes. If you didn't understood, this is what
* happends internally :
*
*	var attr = module.exports.attributes;
*	delete module.exports.attributes;
*	var options = module.exports;
*
*	models.User = sequelize.define("User", attr, options):
**/

module.exports = {
	/**
	* exports.attributes
	*
	* See http://sequelizejs.com/docs/latest/models for the documentation
	*/
	attributes: {
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
				notEmpty: true
			}
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				len: [5, Infinity]
			}
		}
	},
	/**
	* These options aren't very useful, but this is just for the example.
	**/
	tableName: "users_table",
	updatedAt: false // I don't want updatedAt
}