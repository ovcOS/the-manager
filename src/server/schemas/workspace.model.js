const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workspaceSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 2
	},
	categoryIds: {
		type: [String],
		unique: false,
		required: true
	}
}, {
	timestamps: true
});

const Workspace = mongoose.model("Workspace", workspaceSchema);

module.exports = Workspace;