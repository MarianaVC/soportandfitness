var keystone = require('keystone');
var request = require('request');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var Contact = keystone.list('Contact');

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'contact';

	locals.data = {
		branches: [],
		next_branches: [],
		slide: '',
		file: ''
	}

	view.on('init', function(next) {
		var q = keystone.list('Sucursal').model.find();
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

	view.on('get', function(next) {
		if(req.query.slide){
			var id = req.query.slide;
			id = id.substring(0, id.length - 1);
			var q = keystone.list('Slide').model.findOne().where('_id', id);
			q.exec(function(err,results){
				if (err) next();
				if (!results){
					next();
				}
				locals.data.slide = results.name;
				locals.data.file = results.file.filename;
				next();
			});
		}
		else{
			next();
		}
	});

	view.on('post', { action: 'contacto' }, function (next) {

		request({}, function(error,response,body) {
			var name = req.body.name;
			var email = req.body.email;
			var phone = req.body.phone
			var message = req.body.message;
			var file = req.body.file;
			var slide = req.body.slide;

			if(file.length){
				file = '/files/' + file;
			}

			var contact = new Contact.model({
				name: name,
				email: email,
				phone: phone,
				message: message,
				slide: slide
			});
			contact.save(function(err) {
				if(err){
					console.log(err)
					res.send({ 
						'success': false,
						'error': err 
					});
				}
				else{
					res.send({ 
						'success': true,
						'file': file
					});
				}
			});			

		});


	});


	// Render the view
	view.render('contact');
};
