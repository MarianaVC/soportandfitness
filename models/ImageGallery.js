var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * ImageGallery Model
 * ==========
 */

var ImageGallery = new keystone.List('ImageGallery',{
	map: {name: 'title'},
	track: {createdAt:true,createdBy:true,updatedAt:true,updatedBy:true},
	sigular: 'Imagen de galería',
	plural: 'Imágenes de galería',
  	label: 'Imagen',	
});

ImageGallery.add('ImageGallery',{
  title: { type: String, initial:true , required: true,label:'Título' },
  gallery: { type: Types.Relationship, ref: 'Gallery', initial: true, label:'Galería' },
  image: { type: Types.CloudinaryImage, initial:true ,publicID: 'slug', label:'Imagen' },
  image_alt: {type: String, initial:true , required: true,label:'Alt de imagen' },
  image_credit:{type: String, initial:true , required: true,label:'Crédito de imagen' },
  image_tags:{type: String, initial:true , required: true,label:'Tags de imagen separados por comas (\',\') ' },
  description:{type: String, initial:true , required: true,label:'Descripción de la imagen' },

});

/**
 * Registration
 */



ImageGallery.defaultColumns = 'titulo, sucursal';
ImageGallery.register();