const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 2
	},
	cardIds: {
		type: [String],
		unique: true
	}
}, {
	timestamps: true
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
