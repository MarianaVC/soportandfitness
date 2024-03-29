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
  name: {
    type: String,
    initial:true,
    required: true,
    label:'Nombre'
  },
  image: {
    type: Types.CloudinaryImage,
    initial:true,
    publicID: 'slug',
    label:'Imagen'
  },
  image_pop: {
    type: Types.CloudinaryImage,
    initial:true,
    publicID: 'slug',
    label:'Imagen para popup'
  },
  published: {
    type: Types.Boolean,
    default: true,
    label: "Publicar"
  }
});


/* acomplar url de cloudinary para traer imagen ligera */ 
Partner.schema.virtual('image_pop.cloudinaryURL').get(function () {
  if ( this.image_pop ) {
    image = this.image_pop;
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



Partner.defaultColumns = 'name, published';
Partner.register();