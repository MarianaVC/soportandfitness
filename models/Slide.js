var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Slide Model
 * ==========
 */

var Slide = new keystone.List('Slide',{
	map: {name: 'title'},
	track: {createdAt:true,createdBy:true,updatedAt:true,updatedBy:true}
});

Slide.add({
  title: { type: String, required: true },
  description: { type: String, initial: true ,required: true},
  image: {type: Types.CloudinaryImage, initial:true ,publicID: 'slug' },
  home: {type: Types.Relationship, ref: 'Home', initial: true,default : '5acd22d9e2b2517348a8d36b'}

});

/**
 * Registration
 */

Slide.defaultColumns = 'title, image';
Slide.register();