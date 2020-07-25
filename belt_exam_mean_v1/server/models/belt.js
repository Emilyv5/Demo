const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PetSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			validate: {
				validator: function(arr) {
					return arr;
				},
				message: "Name can not be empty.",
			},
		},
		type: {
			type: String,
			validate: {
				validator: function(arr) {
					return arr;
				},
				message: "Type can not be empty.",
			},
		},
		description: {
			type: String,
			validate: {
				validator: function(arr) {
					return arr;
				},
				message: "Description can not be empty.",
			},
		},
		skills: {
			type: Array,
			validate: {
				validator: function(arr) {
					return !(arr.length > 3);
				},
				message: "Skills can.",
			},
		},

		likes: { type: Number, default: 0 },
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const UserSchema = new mongoose.Schema(
	{
		uername: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		images: [
			{
				type: Schema.Types.ObjectId,
				ref: "Blog",
			},
		],
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const BlogSchema = new mongoose.Schema(
	{
		body: { type: String },
		owner: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
		likes: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
		img: { data: Buffer, contentTypes: String },
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

PetSchema.path("name").validate(function(name) {
	return name && name.length >= 3;
}, "Name is at least 3 characters");

PetSchema.path("type").validate(function(type) {
	return type && type.length >= 3;
}, "Type is at least 3 characters");

PetSchema.path("description").validate(function(description) {
	return description && description.length >= 3;
}, "Description is at least 3 characters");

const Pet = mongoose.model("Pet", PetSchema);
const User = mongoose.model("User", UserSchema);
const Blog = mongoose.model("Blog", BlogSchema);

module.exports = {
	Pet: Pet,
	User: User,
	Blog: Blog,
};
