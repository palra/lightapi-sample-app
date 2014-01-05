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
	**/
	
	index: function (req, res) {
		res.render("index.ejs", {name: req.params.name || "World"});
	}
};