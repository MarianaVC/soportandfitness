var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Promotion Model
 * ==========
 */

var Promotion = new keystone.List('Promotion',{
	map: {name: 'title'},
	track: {createdAt:true,createdBy:true,updatedAt:true,updatedBy:true},
	sigular: 'Promoción',
	plural: 'Promociones',
  	label: 'Promoción',	
});

Promotion.add('Promotion',{
  title: { type: String, initial:true , required: true, label:'Título' },
  sucursal: {type: Types.Relationship, ref: 'Sucursal', initial: true, many: true, label: 'Sucursales donde aplica'},
  description: {type: Types.Html, wysiwyg: true, initial: true, required: true, label: 'Descripción'},
  imagen: { type: Types.CloudinaryImage, initial:true ,publicID: 'slug', label:'Imagen' },
  terms_and_conditions: {type: Types.Html, wysiwyg: true, initial: true, required: true, label: 'Términos y condiciones'},
  init_date: {type: Date, initial: true, required: true, label: 'Fecha de inicio'},
  end_date: {type: Date, initial: true, required: true, label: 'Fecha de fin'}
});

/**
 * Registration
 */


Promotion.defaultColumns = 'title, sucursal';
Promotion.register();