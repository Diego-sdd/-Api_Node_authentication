const mongoose = require('../../database/index');
const bcryptjs = require('bcryptjs');
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,

    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        require: true,
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    },
    createDAT: {
        type: Date,
        default: Date.now,
    },

});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;

