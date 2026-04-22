const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [String],
    link: { type: String },
    github: { type: String }, // Make sure this exists
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);