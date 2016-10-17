var Backbone = require('backbone');
var $ = require('jquery');

var Button = Backbone.Model.extend({
  defaults: {
    'likes': 0
  },
  incrementNum: function() {
    var addLike = this.get('likes') + 1;
    this.set('likes', addLike);
  },
  toJSON: function() {                 // not sure if this was the intention behind the challenge, but it does work...
    if (this.get('likes') === 1) {
      $('.likes').html(' like');
       } else {
      $('.likes').html(' likes');
    }
  }
});

module.exports = {
  'Button': Button
}
