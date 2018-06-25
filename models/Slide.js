var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Slide Model
 * ==========
 */

var Slide = new keystone.List('Slide',{
	map: {name: 'name'},
	track: {createdAt:true,createdBy:true,updatedAt:true,updatedBy:true},
	sigular: 'Slide',
	plural: 'Slides',
  label: 'Slide',	
});

/**
 * Local storage for videos
 */
var storage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: 'public/videos',
    publicPath: 'videos',
  }
});
var storageFiles = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: 'public/files',
    publicPath: 'files',
  }
});


Slide.add({
  name: {
    type: String,
    required: true,
    initial: true,
    label: 'Nombre'
  },
  type_slide: {
    type: Types.Select,
    label: 'Tipo de Slide',
    options: ['Video', 'Imagen', 'Imagen con texto'],
    default: 'Video',
    required: true,
    initial: false,
  },
  title: {
    type: String,
    initial: false,
    required: true,
    label: "Título",
    dependsOn: { 'type_slide': ['Imagen con texto'] }
  },
  description: {
    type: String,
    initial: false,
    required: false,
    label: "Subtítulo",
    dependsOn: { 'type_slide': ['Imagen con texto'] },
  },
  button: {
    type: String,
    initial: false,
    required: false,
    label: "Título del botón",
    dependsOn: { 'type_slide': ['Imagen con texto'] },
  },
  button_url: {
    type: String,
    initial: false,
    required: false,
    label: "Url del botón",
    dependsOn: { 'type_slide': ['Imagen con texto'] },
  },
  video: {
    type: Types.File,
    storage:storage,
    required: false,
    initial: false,
    label: "Video",
    dependsOn: { 'type_slide': ['Video'] },
  },
  image: {
    type: Types.CloudinaryImage,
    initial:false,
    label: "Imagen escritorio",
    publicID: 'slug'
  },
  image_mobile: {
    type: Types.CloudinaryImage,
    initial:false,
    label: "Imagen teléfono",
    publicID: 'slug'
  },
  link: {
    type: String,
    initial:false,
    required:true,
    label: "Url de slide",
    dependsOn: { 'type_slide': ['Imagen'] },
  },
  file: {
    type: Types.File,
    storage:storageFiles,
    required: false,
    initial: false,
    label: "Archivo de descarga",
    dependsOn: { 'type_slide': ['Imagen', 'Imagen con texto'] },
  },
  published: {
    type: Types.Boolean,
    default: true,
    label: "Publicar"
  }
});



/* acomplar url de cloudinary para traer imagen ligera */ 
Slide.schema.virtual('image_mobile.cloudinaryURL').get(function () {
  if ( this.image_mobile ) {
    image = this.image_mobile;
    return 'https://res.cloudinary.com/sport-and-fitness-gym/image/upload/f_auto/q_auto/fl_lossy/v' + image.version + '/' + image.public_id + '.' + image.format;
  }
  else{
    return false;
  }
});

Slide.schema.virtual('image.cloudinaryURL').get(function () {
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

Slide.defaultColumns = 'name, title';
Slide.register();