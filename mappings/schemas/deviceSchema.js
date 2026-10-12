const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
	mobile: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	deviceType: {
		type: String,
		required: true,
		trim: true
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
	configuration: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'deviceConfiguration'
	}
});

const Device = mongoose.model('device', deviceSchema);

module.exports = Device;