var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * FitnessActivity Model
 * ==========
 */

var FitnessActivity = new keystone.List('FitnessActivity',{
	map: {name: 'name'},
	track: {createdAt:true,createdBy:true,updatedAt:true,updatedBy:true},
	sigular: 'Actividad',
	plural: 'Actividades Fitness',
  label: 'Actividad',	
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

FitnessActivity.add('FitnessActivity',{
  name: { type: String, required: true, initial: true, label: 'Nombre' },
  description: {type: String, wysiwyg: true, label: 'Descripción'},
  calories: { type: String, initial: true, required: true, label:'Calorías quemadas'},
  image: {type: Types.CloudinaryImage, initial: false, required: false, label: 'Imagen principal (400x400)'},
  video: {type: Types.File, storage:storage, required: false, initial: false ,label: 'Video hover'},
  sucursal: {type: Types.Relationship, ref: 'Sucursal', many:true},
  video_link :{ type: String, initial: false, required: false, label:'Link youtube'},
});

/* acomplar url de cloudinary para traer imagen ligera */ 
FitnessActivity.schema.virtual('image_mobile.cloudinaryURL').get(function () {
  if ( this.image_mobile ) {
    image = this.image_mobile;
    return 'https://res.cloudinary.com/sport-and-fitness-gym/image/upload/f_auto/q_auto/fl_lossy/v' + image.version + '/' + image.public_id + '.' + image.format;
  }
  else{
    return false;
  }
});

FitnessActivity.schema.virtual('image.cloudinaryURL').get(function () {
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

FitnessActivity.defaultColumns = 'name, description';
FitnessActivity.register();