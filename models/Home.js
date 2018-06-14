var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Home Model
 * ==========
 */

var Home = new keystone.List('Home',{
	map: {name:'image'},
	noedit: false,
	nocreate: false,
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

Home.schema.virtual('image.cloudinaryURL').get(function () {
  if ( this.image ) {
    image = this.image;
    return 'https://res.cloudinary.com/sport-and-fitness-gym/image/upload/f_auto/q_auto/fl_lossy/v' + image.version + '/' + image.public_id + '.' + image.format;
  }
  else{
    return false;
  }
});

/**
 * Registration
 */

Home.register();