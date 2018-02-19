var mongoose = require('mongoose');
var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 2, maxlength: 256},
    description: {type: String, default: "", maxlength: 256},
    completed: {type: Boolean, default: false},
}, {timestamps: true } );

var Task = mongoose.model('Task', TaskSchema);
