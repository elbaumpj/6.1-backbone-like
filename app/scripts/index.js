var Button = require('./models/like').Button;
var $ = require('jquery');


var button = new Button();
console.log(button);


$('.like-button').on('click', function(){

  button.incrementNum();

  $('.number').html(button.get('likes'));

  if(button.get('likes') === 1) {
    $('.likes').html(' like');
  } else {
    $('.likes').html(' likes');
  }

});
