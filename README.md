Light API Sample App
===================

## Forms

In this example, you will see how to manage forms in you applications

### Form definition

A form module defines a form and is intented to be used in a controller with
the this.getForm("register") method.

It defines the differents keys of the request and the differents validation
and sanitation methods that each value should be validated by.
Validation methods are provided by `schema-inspector` module.

This module exports an object with two properties : `sanitize` and `validation`

### Using the form in the controller

The this.getForm(name) loads a Form object from the schema in the
/api/forms/name.js module. For more info on the schema syntax, see
/api/forms/register.js module.

It implements two methods :
	- **bind(req)**
		It binds the request provided as argument to the loaded schema and sanitizes
		the values if la.config.security.xss is true.
	- **validate()**
		It validate the values according the validation methods provided in the
		schema and return himself (return this).

It also have 4 properties:
	- __schema__: The schema.
	- __values__: The values from the bind method.
	- __valid__: A boolean indicating if the values are valid according to
		the schema. It runs the validate() method each time the value is
		requested and indicate if the err property is empty or not. It's
		a shortcut to this.err.valid;
	- __err__: An object containing validation errors from the validator
		module.

