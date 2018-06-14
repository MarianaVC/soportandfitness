var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Home Model
 * ==========
 */

var Home = new keystone.List('Home',{
	map: {name:'image'},
	noedit: true,
	nocreate: true,
	sigular: 'Imagen home',
	plural: 'Imágenes home',
  	label: 'Imagen home',	
});


Home.add({
  image: {
    type: Types.CloudinaryImage,
    initial: false,
    publicID: 'slug',
    label:'Imagen de promoción' 
  },
});

/**
 * Registration
 */

Home.register();