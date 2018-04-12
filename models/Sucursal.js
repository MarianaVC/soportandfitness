var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Sucursal Model
 * ==========
 */

var Sucursal = new keystone.List('Sucursal',{
	map: {name: 'nombre'},
	track: {createdAt:true,createdBy:true,updatedAt:true,updatedBy:true},
	sigular: 'Sucursal',
	plural: 'Sucursales',
    label: 'Sucursal',	
});

Sucursal.add('Sucursal',{
  nombre: { type: String, required: true },
  direccion: { type: String, initial: true ,required: true},
  altitud: { type: String, initial: true ,required: true },
  logintud: { type: String, initial: true ,required: true },
  imagen: { type: Types.CloudinaryImage, initial:true ,publicID: 'slug' },
});

/**
 * Registration
 */



Sucursal.defaultColumns = 'nombre, direccion';
Sucursal.register();