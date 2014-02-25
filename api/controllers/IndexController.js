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