var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Sucursal Model
 * ==========
 */

var Sucursal = new keystone.List('Sucursal',{
	map: {name: 'name'},
	track: {createdAt:true,createdBy:true,updatedAt:true,updatedBy:true},
	sigular: 'Sucursal',
	plural: 'Sucursales',
  label: 'Sucursal',	
});


Sucursal.add('Sucursal',{
  name: { type: String, required: true, initial: true, label: 'Nombre' },
  address: { type: String, initial: true, required: true, label: 'Dirección'},
  latitude: { type: String, initial: true, required: true, label:'Altitud'},
  longitude: { type: String, initial: true, required: true, label: 'Longitud'},
  telefono: { type: String, initial: true, required: true, label: 'Teléfono'},
  opening_soon: { type: Boolean, initial: true, required: true, label: '¿Es próxima apertura?'},
  imagen: { type: Types.CloudinaryImage, initial: true, publicID: 'slug', label:'Imagen principal' },
});

/**
 * Registration
 */

Sucursal.defaultColumns = 'name, address';
Sucursal.register();