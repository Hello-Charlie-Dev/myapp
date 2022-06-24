const mongoose = require('mongoose');

const NameSchema = mongoose.Schema({		
    Name: { type: String, required: true },
});

module.exports = mongoose.model('Name', NameSchema);