var Button = require('./models/like').Button;
var $ = require('jquery');


var button = new Button();


$('.like-button').on('click', function(){

  button.incrementNum();
  $('.number').html(button.get('likes'));
  button.toJSON();

});
