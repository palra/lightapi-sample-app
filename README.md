Light API Sample App
===================

## Simple routing example

In this example, you will see how to use the routing service and how to create your own controllers and views

### Routing

```javascript
/**
* config/routes.js
*
* This module map an HTTP request to a controller method.
* There is three ways to define theses routes and map them to a controller method, see below.
*
* In this example, we will attempt to "GET /:name".
* The ":name" means that any following string in the HTTP request will be in the 'req.params.name' variable, in the controller. This is some Express.js basics, so, one more time, see Express documentation for more details.
*
**/

module.exports = {
	"/:name": "IndexController:index"

	/* It could be defined as :

		"GET /": "IndexController:index"

	Or:
		"/:name": {
			controller: "IndexController",
			method: "index",
			verb: "GET"
		}

	Note that in the first form, the verb not being explicitely defined, Light API will repsond with this controller to each GET request matching this route.

	*/
};
```

### Controller
```javascript
/**
* api/controllers/IndexController.js
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
	**/
	
	index: function (req, res) {
		res.render("index.ejs", {name: req.params.name || "World"});
	}
};
```

### View
```
Hello <%= name %> !

<% /* This is some basic EJS template file. In the "<% ... %>" tags, you can write JavaScript code.
The 'name' variable was initialized in the controller, through the object passed as the second parameter
of 'res.render' function. Please refer to EJS documentation for further details. */ %>
```
