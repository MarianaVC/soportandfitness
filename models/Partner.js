var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Partner Model
 * ==========
 */

var Partner = new keystone.List('Partner',{
	track: {createdAt:true,createdBy:true,updatedAt:true,updatedBy:true},
	sigular: 'Convenio',
	plural: 'Convenios',
  label: 'Convenio',	
});

Partner.add('Partner',{
  image: { type: Types.CloudinaryImage, initial:true ,publicID: 'slug', label:'Imagen para escritorio' },
  image_mobile: { type: Types.CloudinaryImage, initial:true ,publicID: 'slug', label:'Imagen para teléfono' },
  image_alt: {type: String, initial:true , required: true,label:'Alt de imagen' },

});


/* acomplar url de cloudinary para traer imagen ligera */ 
Partner.schema.virtual('image_mobile.cloudinaryURL').get(function () {
  if ( this.image_mobile ) {
    image = this.image_mobile;
    return 'https://res.cloudinary.com/sport-and-fitness-gym/image/upload/f_auto/q_auto/fl_lossy/v' + image.version + '/' + image.public_id + '.' + image.format;
  }
  else{
    return false;
  }
});

Partner.schema.virtual('image.cloudinaryURL').get(function () {
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



Partner.defaultColumns = 'desktop_image, mobile_image';
Partner.register();