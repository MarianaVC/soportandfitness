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
  autokey: { path: 'slug', from:'name', unique:true }
});


Sucursal.add('Sucursal',{
  name: {
    type: String,
    required: true,
    initial: true,
    label: 'Nombre'
  },
  address: {
    type: Types.Html,
    wysiwyg: false,
    initial: false,
    required: true,
    default: 'Dirección',
    label: 'Dirección'
  },
  latitude: {
    type: String,
    initial: false,
    required: true,
    default: 'Altitud',
    label:'Altitud'
  },
  longitude: {
    type: String,
    initial: false,
    required: true,
    default: 'Longitud',
    label: 'Longitud'
  },
  telephone: {
    type: String,
    initial: false,
    required: true,
    default: 'Teléfono',
    label: 'Teléfono'
  },
  telephone2: {
    type: String,
    initial: false,
    required: false,
    default: 'Teléfono Secundario',
    label: 'Teléfono Secundario'
  },
  opening_soon: {
    type: Boolean,
    initial: false,
    label: '¿Es próxima apertura?'
  },
  image: {
    type: Types.CloudinaryImage,
    initial: false,
    publicID: 'slug',
    label:'Imagen principal' 
  },
  schedule_image: {
    type: Types.CloudinaryImage,
    initial: false,
    publicID: 'slug',
    label:'Imagen de horario' 
  },
});

/**
 * Registration
 */

Sucursal.defaultColumns = 'name, address';
Sucursal.register();