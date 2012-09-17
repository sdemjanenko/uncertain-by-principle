
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Stephen Demjanenko' });
};

exports.sublime = function(req, res){
  res.render('sublime');
};
