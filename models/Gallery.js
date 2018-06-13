
var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * ==========
 */

var Gallery = new keystone.List('Gallery',{
	map: {name: 'title'},
	track: {createdAt:true,createdBy:true,updatedAt:true,updatedBy:true},
	sigular: 'Galería',
	plural: 'Galerías',
  label: 'Galería',	
});

Gallery.add('Gallery',{
  title: { type: String, initial:true , required: true },
  sucursal: {type: Types.Relationship, ref: 'Sucursal', initial: true},
});

/**
 * Registration
 */



Gallery.defaultColumns = 'titulo, sucursal';
Gallery.register();