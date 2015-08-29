var mongoose = require('mongoose');


var commentSchema = new mongoose.Schema({

	post_id:String,
	comment:String,
	userName:String,
	created_at:{ type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
	
})

mongoose.model('Comment', commentchema);