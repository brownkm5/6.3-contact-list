var Backbone = require('backbone');
var $ = require('jquery');

var Contact = Backbone.Model.extend({

});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/kevinbrowncontacts',
});

module.exports = {
  Contact: Contact,
  ContactCollection: ContactCollection
};
