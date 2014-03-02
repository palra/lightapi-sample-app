/**
* register.js
*
* This module defines a form and is intented to be used in a controller via the
* this.getForm("register") method.
* It defines the differents keys of the request and the differents validation
* methods that each value should be validated by.
* Validation methods are provided by `schema-inspector` module.
*
* This module exports an object with two properties : `validation` and `sanitize`.
*
**/

module.exports = {
	validation: {
		email: {
			type: "string",
			pattern: "email"
		},
		password: {
			type: "string",
			minLength: 6
		}
	},
	sanitize: {
		email: {
			type: "string",
			rules: ["trim"]
		}
	}
}