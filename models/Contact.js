var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Contact Model
 * ==========
 */

var Contact = new keystone.List('Contact',{
	track: {createdAt:true,createdBy:true,updatedAt:true,updatedBy:true},
	sigular: 'Contacto',
	plural: 'Contactos',
	label: 'Contacto',	
});

Contact.add('Contact',{
  name: { type: String, initial:true , required: false },
  email: { type: String, initial:true , required: false },
  phone: { type: String, initial:true , required: false },
  message: { type: String, initial:true , required: false },
  slide: { type: String, initial:true , required: false },
  readed: { type: Boolean, initial: false}
});

Contact.defaultColumns = 'name|40%, readed|30%, createdAt|30%';

/**
 * Registration
 */
Contact.register();