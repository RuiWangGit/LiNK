// First at the top of your routes.js file you'll have to require the controller

var posts = require('./../server/controllers/post.js');


module.exports = function(app) {
    

 app.post('/add', function(req, res){
    console.log('00000 add in post');
  })







}// end of module export




