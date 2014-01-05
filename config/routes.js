/**
* routes.js
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