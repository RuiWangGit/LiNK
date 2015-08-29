var mongoose = require('mongoose');


var postSchema = new mongoose.Schema({

	name:String,
	title:String,
	description:String,
	teamName:String,
	userName:String,
	created_at:{ type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }

})



mongoose.model('Post', postSchema);
