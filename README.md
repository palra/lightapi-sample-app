Light API sample applications
=============================

## ORM

In this example, you will see how to use the Sequelize wrapper provided by LightAPI

### Controller.ORM

LightAPI uses Sequelize as ORM. It provides a wrapper instanciated in
the this.ORM property. It has two properties :
- `this.connection` : the instance of Sequelize (see 
[the doc](http://sequelizejs.com/docs/latest/usage#basics))
- `this.models` : an object containing all the models

In order to get the models more easily, they are also available from
the root of the object, see below for an example. If a model is named
`models`, the only way to access to this model is to call it from
`this.models.models`. Just in case.