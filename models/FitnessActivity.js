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
 * Local storage for pdfs
 */
var storage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: 'uploads',
    publicPath: '/public/uploads/',
  }
});

FitnessActivity.add('FitnessActivity',{
  name: { type: String, required: true, initial: true, label: 'Nombre' },
  description: {type: Types.Html, wysiwyg: true, label: 'Descripción'},
  facts: {type: Types.Html, wysiwyg: true,label: 'Ficha técnica'},  
  calories: { type: String, initial: true, required: true, label:'Calorías quemadas'},
  image: {type: Types.CloudinaryImage, initial: true, required: true, label: 'Imagen principal'},
  pdf: {type: Types.File, storage:storage, required: false, initial:true ,label: 'PDF'},
  sucursal: {type: Types.Relationship, ref: 'Sucursal', many:true},
  video_link :{ type: String, initial: true, required: true, label:'Link youtube'}, 
  
});

/**
 * Registration
 */

FitnessActivity.defaultColumns = 'name, description';
FitnessActivity.register();