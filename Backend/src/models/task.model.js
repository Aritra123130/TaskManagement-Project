const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    prioritylevel:{
        type:String,
        enum:['low','medium','high'],
        default:'medium'    
    },
    duedate:{
        type:Date,
        required:true
    },
    user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
    }
});

const task = mongoose.model('task',taskSchema);

module.exports = task;