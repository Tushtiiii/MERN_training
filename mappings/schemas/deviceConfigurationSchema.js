const mongoose = require('mongoose');

const deviceConfigurationSchema = new mongoose.Schema({
    device: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'device',
        required: true,
        unique: true
    },
    settings: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        default: {}
    }
}, { timestamps: true });

const DeviceConfiguration = mongoose.model('deviceConfiguration', deviceConfigurationSchema);

module.exports = DeviceConfiguration;