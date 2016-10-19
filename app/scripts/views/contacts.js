window.$ = window.jQuery = require('jquery');
require('bootstrap-sass/assets/javascripts/bootstrap');
var Backbone = require('backbone');
var formTemplate = require('../../templates/form.hbs');
var contactsHolderTemplate = require('../../templates/contacts-holder.hbs')
var contactsTemplate = require('../../templates/contacts.hbs')

// var FormView = Backbone.View.extend({
//   tagName: 'form',
//   attributes: {
//     id: 'contact-form',
//     method: 'post'
//   },
//   template: formTemplate,
//   render: function(){
//     this.$el.html(formTemplate);
//
//     return this;
//   }
// });

var ContactHolderView = Backbone.View.extend({
  tagName: 'ul',
  attributes: {
    'class':'contact-container contact-list',
  },
  initialize: function(){
   this.listenTo(this.collection, 'add', this.renderContactItem);
 },
  template: contactsHolderTemplate,
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  renderContactItem: function(contact){
    var contactItem = new ContactItemView({model: contact});
    this.$el.append(contactItem.render().el);
}
});

var ContactItemView = Backbone.View.extend({
  tagName: 'li',
  attributes: {
    'class': 'list-item'
  },
  template:contactsTemplate,
  render: function(){
    var context = this.model.toJSON();
    var renderedTemplate = this.template(context);

   this.$el.html(renderedTemplate);

   return this;
 }
});

var ContactFormView = Backbone.View.extend({
  events: {
    'submit': 'addContact'
  },
  addContact: function(e){
    e.preventDefault();
    var newName = $('.name').val();
    var newPhoneNumber = $('.phone-number').val();
    var newEmail = $('.email').val();
    var newTwitter = $('.twitter').val();

    //create a new object in the contactList collection with the values from the text boxes
    this.collection.create({name: newName, phoneNumber : newPhoneNumber, email : newEmail, twitter: newTwitter});
    console.log('this.collection', this.collection);

    //clear text boxes after the post
    $('.email').val('');
    $('.phone-number').val('');
    $('.name').val('');
    $('.twitter').val('');
  }
});

module.exports = {
  ContactHolderView: ContactHolderView,
  ContactItemView: ContactItemView,
  ContactFormView: ContactFormView
};
