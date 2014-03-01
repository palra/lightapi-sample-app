/**
* api/controllers/IndexController.js
*
* A controller module must export an object associationg a method name to a
* function.
* As with Express.js, two arguments will pe passed to theses functions : the
* request and the response. For further documentation about theses arguments,
* please refer to Express.js documentation.
*
**/

module.exports = {

    /**
    * exports.index
    * 
    * As configured in the /config/routes.js module, this function will be
    * called by the "GET /" HTTP request.
    * One more time, for more info, please refer to Express.js doc. In fact, 
    * we're just passing this function to Express, so there's no difference 
    * (for the moment ...)
    *
    * LightAPI uses Sequelize as ORM. It provides a wrapper instanciated in
    * the this.ORM property. It has two properties :
    *   - this.connection : the instance of Sequelize (see 
    * http://sequelizejs.com/docs/latest/usage#basics)
    *   - this.models : an object containing all the models
    *
    * In order to get the models more easily, they are also available from
    * the root of the object, see below for an example. If a model is named
    * `models`, the only way to access to this model is to call it from
    * `this.models.models`. Just in case.
    **/

    index: function (req, res) {
        this.ORM.User.findAll().success(function(result){
            res.render("index.ejs", {users: result});
        });
        // For further details : http://sequelizejs.com/docs/latest/installation
    },

    /**
    * exports.add
    * Each "GET /add" HTTP request, this method will create a random User and
    * redirect to the index controller.
    **/

    add: function (req, res) {
        this.ORM.User.create({
            email: Math.random().toString(36).replace(/[^a-z]+/g, '') + "@email.com",
            password: Math.random().toString(36).replace(/[^a-z]+/g, '')
            /* Of course, this is a very casual example, it shouldn't be used in
            *  production. One more time, just in case ... */
        }).success(function () {
            res.redirect("/");
        })
    }
};