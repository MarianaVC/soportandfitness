var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'about';

	locals.data = {
		home: []
	}

	view.on('init', function(next) {
		var q = keystone.list('Home').model.findOne();
		q.exec(function(err,results){
			if (err) return res.err(err);
			if (!results){
				return res.status(404).render('errors/404');
			}
			locals.data.home = results;

			next();
		});
	});

	// Render the view
	view.render('about');
};
