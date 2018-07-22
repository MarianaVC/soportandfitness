var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'landing';

	locals.data = {
		landing: []
	}
	var url = '';

	view.on('init', function(next) {
		var q = keystone.list('Landing').model.findOne();
		q.exec(function(err,results){
			if (err) return res.err(err);
			if (!results){
				return res.status(404).render('errors/404');
			}
			locals.data.landing = results;
			url = '/especiales/' + results.slug;
			res.redirect(url);
		});
	});

	
	// Render the view
	view.render('landing');
};