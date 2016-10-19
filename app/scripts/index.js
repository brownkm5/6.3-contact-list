var Backbone = require('backbone');
var $ = require('jquery');
var Contact = require('./models/contacts').Contact;
var ContactCollection = require('./models/contacts').ContactCollection;
var views = require('./views/contacts');


$(function(){
  var contactList = new ContactCollection();

  //
  var contactForm = new views.ContactFormView({collection: contactList});
  contactForm.setElement($('.contact-form')[0]);

  //append contact list holder to the .contact-container div
  var contactListHolder = new views.ContactHolderView({collection: contactList});
  $('.contact-container').append(contactListHolder.render().el);


  contactList.fetch().then(function(){
    // console.log(contactList);
  });
});
