var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	locals.data = {
		slides: [],
		branches: []
	}

	view.on('init', function(next) {
		var q = keystone.list('Slide').model.find().where('published', true).sort('-createdAt').limit(5);
		q.exec(function(err,results){
			if (err) return res.err(err);
			if (!results){
				return res.status(404).render('errors/404');
			}
			locals.data.slides = results;
			next();
		});
	});

	view.on('init', function(next) {
		var q = keystone.list('Sucursal').model.find();
		q.exec(function(err,results){
			if (err) return res.err(err);
			if (!results){
				return res.status(404).render('errors/404');
			}
			locals.data.branches = results;

			next();
		});
	});

	// Render the view
	view.render('index');
};
