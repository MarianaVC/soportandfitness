var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Home Model
 * ==========
 */

var Home = new keystone.List('Home',{
	map: {name:'title'},
	noedit: true,
	nocreate: true
});


Home.add({
  title: { type: String, required: true },

});

/**
 * Registration
 */

Home.register();