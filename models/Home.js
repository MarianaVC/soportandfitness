var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Home Model
 * ==========
 */

var Home = new keystone.List('Home',{
	nocreate: true,
	sigular: 'Imagen home',
	plural: 'Imágenes home',
  	label: 'Información Homes',	
});


Home.add({
  name: {
    label:'Imágenes home',
    type: String, initial:true,
    required: true,
    default: 'Información Homes'
  },
  image: {
    type: Types.CloudinaryImage,
    initial: false,
    publicID: 'slug',
    label:'Imagen de promoción (home general)' 
  },
  partner_1: {
    type: Types.CloudinaryImage,
    initial: false,
    publicID: 'slug',
    label:'Imagen home convenios (1)' 
  },
  partner_2: {
    type: Types.CloudinaryImage,
    initial: false,
    publicID: 'slug',
    label:'Imagen home convenios (2)' 
  },
  partner_3: {
    type: Types.CloudinaryImage,
    initial: false,
    publicID: 'slug',
    label:'Imagen home convenios (3)' 
  },
  partner_4: {
    type: Types.CloudinaryImage,
    initial: false,
    publicID: 'slug',
    label:'Imagen home convenios (4)' 
  },
  us_fold: {
    type: Types.Html,
    wysiwyg: true,
    initial: false,
    required: true,
    default: 'Fold Nosotros',
    label: 'Fold Nosotros'
  },
  us_insta: {
    type: Types.Html,
    wysiwyg: false,
    initial: false,
    required: true,
    default: 'Nosotros - Instalaciones',
    label: 'Nosotros - Instalaciones'
  },
  us_team: {
    type: Types.Html,
    wysiwyg: false,
    initial: false,
    required: true,
    default: 'Nosotros - Equipo',
    label: 'Nosotros - Equipo'
  },
  us_activities: {
    type: Types.Html,
    wysiwyg: false,
    initial: false,
    required: true,
    default: 'Nosotros - Actividades',
    label: 'Nosotros - Actividades'
  },
  us_mision: {
    type: Types.Html,
    wysiwyg: false,
    initial: false,
    required: true,
    default: 'Nosotros - Misión',
    label: 'Nosotros - Misión'
  },
  us_vision: {
    type: Types.Html,
    wysiwyg: false,
    initial: false,
    required: true,
    default: 'Nosotros - Visión',
    label: 'Nosotros - Visión'
  },
  promos_fold: {
    type: Types.Html,
    wysiwyg: true,
    initial: false,
    required: true,
    default: 'Fold Promociones',
    label: 'Fold Promociones'
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

Home.schema.virtual('partner_1.cloudinaryURL').get(function () {
  if ( this.partner_1 ) {
    image = this.partner_1;
    return 'https://res.cloudinary.com/sport-and-fitness-gym/image/upload/f_auto/q_auto/fl_lossy/v' + image.version + '/' + image.public_id + '.' + image.format;
  }
  else{
    return false;
  }
});

Home.schema.virtual('partner_2.cloudinaryURL').get(function () {
  if ( this.partner_2 ) {
    image = this.partner_2;
    return 'https://res.cloudinary.com/sport-and-fitness-gym/image/upload/f_auto/q_auto/fl_lossy/v' + image.version + '/' + image.public_id + '.' + image.format;
  }
  else{
    return false;
  }
});

Home.schema.virtual('partner_3.cloudinaryURL').get(function () {
  if ( this.partner_3 ) {
    image = this.partner_3;
    return 'https://res.cloudinary.com/sport-and-fitness-gym/image/upload/f_auto/q_auto/fl_lossy/v' + image.version + '/' + image.public_id + '.' + image.format;
  }
  else{
    return false;
  }
});

Home.schema.virtual('partner_4.cloudinaryURL').get(function () {
  if ( this.partner_4 ) {
    image = this.partner_4;
    return 'https://res.cloudinary.com/sport-and-fitness-gym/image/upload/f_auto/q_auto/fl_lossy/v' + image.version + '/' + image.public_id + '.' + image.format;
  }
  else{
    return false;
  }
});

/**
 * Registration
 */
Home.defaultColumns = 'name';
Home.register();