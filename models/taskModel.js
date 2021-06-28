const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title : {
        type : String , 
        required : true  ,
        trim : true 
    } ,
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },

    targettime : {
        type : String ,
        required : true 
    } ,

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task