Light API Sample App
===================

## Forms

In this example, you will see how to manage forms in you applications

### Base configuration

```javascript
/**
* config/routes.js
*
* This module map an HTTP request to a controller method.
* There is three ways to define theses routes and map them to a controller method, see below.
*
* In this example, we will attempt to "GET /:name".
* The ":name" means that any following string in the HTTP request will be in the 'req.params.name' variable, in
* the controller. This is some Express.js basics, so, one more time, see Express documentation for more details.
*
**/

module.exports = {
	"GET /": "IndexController:index",
	"POST /": "IndexController:register",

	/* It could be defined as :

		"GET /": "IndexController:index"

	Or:
		"/:name": {
			controller: "IndexController",
			method: "index",
			verb: "GET"
		}

	Note that in the first form, the verb not being explicitely defined, Light API will repsond with this
	controller to each GET request matching this route.

	*/
};
```
```javascript
/**
* config/server.js
*
* This module exports all parameters needed for the configuration of the HTTP server.
* For the moment, you only have to provide the port that the server will be listening to.
*
**/

module.exports = {
	port: 1337
};
```

### Form
```javascript
/**
* register.js
*
* This module defines a form and is intented to be used in a controller via the this.getForm("register") method.
* It defines the differents keys of the request and the differents validation methods that each value
* should be validated by.
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
};
```

### Controller
```javascript
/**
* IndexController.js
*
* A controller module must export an object associationg a method name to a function.
* As with Express.js, two arguments will pe passed to theses functions : the request and the response. For further documentation about theses arguments, please refer to Express.js documentation.
*
**/

module.exports = {

	/**
	* exports.index
	* 
	* As configured in the /config/routes.js module, this function will be called by the "GET /" HTTP request.
	* One more time, for more info, please refer to Express.js doc. In fact, we're just passing this function to Express, so there's no difference (for the moment ...)
    *
    * It just return the form views.
	*
	**/
	
	index: function (req, res) {
		res.render("index.ejs");
	},

    /**
	* exports.register
	* 
	* Will respond on "POST /" HTTP request.
    *
	**/

	register : function (req, res) {
        /**
        * The this.getForm(name) loads a Form object from the schema in the /api/forms/name.js module. For more info on the schema syntax, see /api/forms/register.js module.
        * It implements two methods :
        *
        *   - bind(req)
        *   It binds the request provided as argument to the loaded schema and sanitizes the values if la.config.security.xss is true.
        *
        *   - validate()
        *   It validate the values according the validation methods provided in the schema and return himself (return this).
        *
        * It also have 4 properties:
        *
        *   - schema:
        *   The schema.
        *
        *   - values:
        *   The values from the bind method.
        *
        *   - valid:
        *   A boolean indicating if the values are valid according to the schema. It runs the validate() method each time the value is requested and indicate if the err property is empty or not.
        *
        *   - err:
        *   An object containing validation errors. Initialized to {} and equal to {} when no errors occured.
        */

        var form = this.getForm("register"); // Creating a form from the /api/forms/register.js schema
        form.bind(req.body); // Binding the request to the form (req.body contains the POST data)
		res.send(form.validate().err); // Sends validation error
	},
};
```
