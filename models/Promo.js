var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Promo Model
 * ==========
 */

var Promo = new keystone.List('Promo',{
	map: {name: 'title'
},
	track: {createdAt:true,createdBy:true,updatedAt:true,updatedBy:true
  },
	sigular: 'Promoción',
	plural: 'Promociones',
  	label: 'Promoción',	
});

/**
 * Local storage for promos
 */
var storage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: 'public/files',
    publicPath: 'files',
  }
});

Promo.add('Promo',{
  title: { 
    type: String,
    initial:true ,
    required: true,
    label:'Título' 
  },
  sucursal: {
    type: Types.Relationship,
    ref: 'Sucursal',
    many: true,
    label: 'Sucursales donde aplica'
  },
  description: {
    type: Types.Html,
    required: true,
    default: 'Descripción',
    label: 'Descripción'
  },
  image: { 
    type: Types.CloudinaryImage,
    publicID: 'slug',
    label:'Imagen escritorio' 
  },
  image_mobile: { 
    type: Types.CloudinaryImage,
    publicID: 'slug',
    label:'Imagen teléfono' 
  },
  file: {
    type: Types.File,
    storage:storage,
    required: false,
    initial: false ,label: 'PDF de descarga'
  },
  terms_and_conditions: {
    type: Types.Html,
    required: true,
    default: 'Términos y condiciones',
    label: 'Términos y condiciones'
  },
  init_date: {
    type: Date,
    initial: true,
    required: true,
    label: 'Fecha de inicio'
  },
  end_date: {
    type: Date,
    initial: true,
    required: true,
    label: 'Fecha de fin'
  }
});

/* acomplar url de cloudinary para traer imagen ligera */ 
Promo.schema.virtual('image_mobile.cloudinaryURL').get(function () {
  if ( this.image_mobile ) {
    image = this.image_mobile;
    return 'https://res.cloudinary.com/sport-and-fitness-gym/image/upload/f_auto/q_auto/fl_lossy/v' + image.version + '/' + image.public_id + '.' + image.format;
  }
  else{
    return false;
  }
});

Promo.schema.virtual('image.cloudinaryURL').get(function () {
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




Promo.defaultColumns = 'title, sucursal';
Promo.register();