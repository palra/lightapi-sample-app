/**
* register.js
*
* This module defines a form and is intented to be used in a controller via the this.getForm("register") method.
* It defines the differents keys of the request and the differents validation methods that each value should be validated by.
* Validation methods are provided by `validator` module.
*
* This module exports an object.
*
**/

module.exports = {
	email: "isEmail",
	password: {
		"!isNull": null,
		isLength: 6
	}
}