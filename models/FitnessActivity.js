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

/**
 * Registration
 */

FitnessActivity.defaultColumns = 'name, description';
FitnessActivity.register();