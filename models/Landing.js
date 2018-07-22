var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Landing Model
 * ==========
 */

var Landing = new keystone.List('Landing',{
	map: {name: 'name'},
	track: {createdAt:true,createdBy:true,updatedAt:true,updatedBy:true},
	sigular: 'Landing page',
	plural: 'Landing pages',
  label: 'Landing page',
  autokey: { path: 'slug', from:'name', unique:true}
});

var storageFiles = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: 'public/files',
    publicPath: 'files',
  }
});

Landing.add(
  'Metas',{
    name: {
      type: String,
      required: true,
      initial: true,
      label: 'Nombre (url)'
    },
    meta_description: {
      label:'Meta description',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Meta description'
    },
    keywords: {
      label:'Keywords',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Keywords'
    },
    share: {
      label:'Texto para share de redes',
      type: Types.Html,
      wysiwyg: false,
      initial: false,
      required: true,
      default: 'Texto para share de redes'
    },
    share_image: {
      type: Types.CloudinaryImage,
      initial: false,
      publicID: 'slug',
      label:'Imagen para share de redes' 
    }
  },
  'Landing',{
    title: {
      type: String,
      required: true,
      initial: false,
      default: 'Título',
      label: 'Título'
    },
    subtitle: {
      type: String,
      required: true,
      initial: false,
      default: 'Subtítulo',
      label: 'Subtítulo'
    },
    description: {
      type: Types.Html,
      required: true,
      initial: false,
      default: 'Descripción',
      label: 'Descripción'
    },
    btn_form_title: {
      type: String,
      initial: false,
      required: true,
      default: 'Botón de formulario',
      label:'Título botón de formulario'
    },
    btn_1_title: {
      type: String,
      initial: false,
      required: true,
      default: 'Botón 1',
      label:'Título botón 1'
    },
    btn_1_url: {
      type: String,
      initial: false,
      required: true,
      default: '/',
      label:'URL botón 1'
    },
    btn_2_title: {
      type: String,
      initial: false,
      required: true,
      default: 'Botón 2',
      label:'Título botón 2'
    },
    btn_2_url: {
      type: String,
      initial: false,
      required: true,
      default: '/',
      label:'URL botón 2'
    },
    image: {
      type: Types.CloudinaryImage,
      initial: false,
      required: false,
      label: 'Imagen de fondo (400x400)'
    },
    file: {
      type: Types.File,
      storage:storageFiles,
      required: false,
      initial: false,
      label: "Archivo de descarga"
    },
  }
);

/* acomplar url de cloudinary para traer imagen ligera */ 
Landing.schema.virtual('image_mobile.cloudinaryURL').get(function () {
  if ( this.image_mobile ) {
    image = this.image_mobile;
    return 'https://res.cloudinary.com/sport-and-fitness-gym/image/upload/f_auto/q_auto/fl_lossy/v' + image.version + '/' + image.public_id + '.' + image.format;
  }
  else{
    return false;
  }
});

Landing.schema.virtual('image.cloudinaryURL').get(function () {
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

Landing.defaultColumns = 'name, description';
Landing.register();