var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Home Model
 * ==========
 */

var Home = new keystone.List('Home',{
	nocreate: true,
  nodelete: true,
	sigular: 'Imagen home',
	plural: 'Imágenes home',
  	label: 'Información Homes',	
});


Home.add(
  'Home general', {
    name: {
      label:'Imágenes home',
      type: String,
      initial:true,
      required: true,
      default: 'Información Homes'
    },
    home_meta_description: {
      label:'Meta description',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Meta description'
    },
    home_keywords: {
      label:'Keywords',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Keywords'
    },
    home_share: {
      label:'Texto para share de redes',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Texto para share de redes'
    },
    home_share_image: {
      type: Types.CloudinaryImage,
      initial: false,
      publicID: 'slug',
      label:'Imagen para share de redes' 
    },
    image: {
      type: Types.CloudinaryImage,
      initial: false,
      publicID: 'slug',
      label:'Imagen de promoción' 
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
    }
  },
  'Nosotros',{
    us_meta_description: {
      label:'Meta description',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Meta description'
    },
    us_keywords: {
      label:'Keywords',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Keywords'
    },
    us_share: {
      label:'Texto para share de redes',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Texto para share de redes'
    },
    us_share_image: {
      type: Types.CloudinaryImage,
      initial: false,
      publicID: 'slug',
      label:'Imagen para share de redes' 
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
    }
  },
  'Promociones',{
    promos_meta_description: {
      label:'Meta description',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Meta description'
    },
    promos_keywords: {
      label:'Keywords',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Keywords'
    },
    promos_share: {
      label:'Texto para share de redes',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Texto para share de redes'
    },
    promos_share_image: {
      type: Types.CloudinaryImage,
      initial: false,
      publicID: 'slug',
      label:'Imagen para share de redes' 
    },
    promos_fold: {
      type: Types.Html,
      wysiwyg: true,
      initial: false,
      required: true,
      default: 'Fold Promociones',
      label: 'Fold Promociones'
    },
  },
  'Instalaciones',{
    insta_meta_description: {
      label:'Meta description',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Meta description'
    },
    insta_keywords: {
      label:'Keywords',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Keywords'
    },
    insta_share: {
      label:'Texto para share de redes',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Texto para share de redes'
    },
    insta_share_image: {
      type: Types.CloudinaryImage,
      initial: false,
      publicID: 'slug',
      label:'Imagen para share de redes' 
    }
  },
  'Convenios',{
    partners_meta_description: {
      label:'Meta description',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Meta description'
    },
    partners_keywords: {
      label:'Keywords',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Keywords'
    },
    partners_share: {
      label:'Texto para share de redes',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Texto para share de redes'
    },
    partners_share_image: {
      type: Types.CloudinaryImage,
      initial: false,
      publicID: 'slug',
      label:'Imagen para share de redes' 
    }
  },
  'Actividades',{
    activities_meta_description: {
      label:'Meta description',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Meta description'
    },
    activities_keywords: {
      label:'Keywords',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Keywords'
    },
    activities_share: {
      label:'Texto para share de redes',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Texto para share de redes'
    },
    activities_share_image: {
      type: Types.CloudinaryImage,
      initial: false,
      publicID: 'slug',
      label:'Imagen para share de redes' 
    }
  },
  'Contacto',{
    contact_meta_description: {
      label:'Meta description',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Meta description'
    },
    contact_keywords: {
      label:'Keywords',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Keywords'
    },
    contact_share: {
      label:'Texto para share de redes',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Texto para share de redes'
    },
    contact_share_image: {
      type: Types.CloudinaryImage,
      initial: false,
      publicID: 'slug',
      label:'Imagen para share de redes' 
    }
  }
);

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