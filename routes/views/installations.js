
var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'installations';
	locals.data = {
		branches: [],
		next_branches: [],
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
	
	view.on('init', function(next) {
		var q = keystone.list('Sucursal').model.find().where('published', true);
		q.exec(function(err,results){
			if (err) return res.err(err);
			if (!results){
				return res.status(404).render('errors/404');
			}
			for(i in results){
				if(results[i].opening_soon){
					locals.data.next_branches.push(results[i]);
				}
				else{
					locals.data.branches.push(results[i]);
				}
			}

			next();
		});
	});
	// Render the view
	view.render('installations');
};