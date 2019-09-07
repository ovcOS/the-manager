const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 2
	},
	description: {
		type: String,
		required: true,
		minlength: 10
	},
	dueDate: {
		type: Date,
	}
}, {
	timestamps: true
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;