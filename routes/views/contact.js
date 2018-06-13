var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'contact';

	locals.data = {
		branches: []
	}
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
	view.on('post', { action: 'contact' }, function (next) {

		request(function(error,response,body) {
			body = JSON.parse(body);

			// create reusable transporter object using the default SMTP transport
			var name = req.body.name;
			var email = req.body.email;
			var phone = req.bpdy.phone
			var message = req.body.message;

			var contact = new contact.model({
                          name: name,
                          email: email,
                          phone: phone,
                          message: message
                        });
                        contact.save(function(err) {
                            // data has been saved  
                        });			

		});


	});


	// Render the view
	view.render('contact');
};
