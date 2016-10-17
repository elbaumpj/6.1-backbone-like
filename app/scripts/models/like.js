var Backbone = require('backbone');

var Button = Backbone.Model.extend({
  defaults: {
    'likes': 0
  },
  incrementNum: function(){
    var addLike = this.get('likes') + 1;
    this.set('likes', addLike);
  }
});

module.exports = {
  'Button': Button
}
