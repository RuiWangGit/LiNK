var mongoose = require('mongoose')

var contributionSchema = new mongoose.Schema({
	team: String,
	contribution: Boolean,
	amount: Number,
	description: String,
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
})

mongoose.model('Contribution', contributionSchema)
