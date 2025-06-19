const mongoose = require('mongoose');

const ConfigurationSchema = new mongoose.Schema({
    configId: { type: String, required: true, unique: true, trim: true },
    data: {
        type: [[String]],
        required: true
    },
    remark: {
        type: String,
        default: ''
    },
    userData: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    }
}, { timestamps: true });

module.exports = mongoose.model('Configuration', ConfigurationSchema);