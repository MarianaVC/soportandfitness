var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Slide Model
 * ==========
 */

var Slide = new keystone.List('Slide',{
	map: {name: 'title'},
	track: {createdAt:true,createdBy:true,updatedAt:true,updatedBy:true},
	sigular: 'Slide',
	plural: 'Slides',
    label: 'Slide',	
});

/**
 * Local storage for videos
 */
var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads',
		publicPath: '/public/uploads/',
	}
});


Slide.add({
  title: { type: String, required: true },
  description: { type: String, initial: true ,required: true},
  image: {type: Types.CloudinaryImage, initial:true ,publicID: 'slug' },
  home: {type: Types.Relationship, ref: 'Home', initial: true,default : '5acd22d9e2b2517348a8d36b'},
  video: {type: String, initial:false, required:false}
  link: {type: String, initial:false, required:false}

});

/**
 * Registration
 */

Slide.defaultColumns = 'title, image';
Slide.register();