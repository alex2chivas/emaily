const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const serveySchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [
		RecipientSchema
	],
	yes: {
		type: Number,
		default: 0
	},
	no: {
		type: Number,
		default: 0
	}
});

mongoose.model('surveys', serveySchema);
