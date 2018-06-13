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
  desktop_image: { type: Types.CloudinaryImage, initial:true ,publicID: 'slug', label:'Imagen para escritorio' },
  mobile_image: { type: Types.CloudinaryImage, initial:true ,publicID: 'slug', label:'Imagen para teléfono' },
  image_alt: {type: String, initial:true , required: true,label:'Alt de imagen' },

});

/**
 * Registration
 */



Partner.defaultColumns = 'desktop_image, mobile_image';
Partner.register();