const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        unique: true,
        trim: true,
        type: String,
        minlength:3,
        required:true,
    },
}, {
    timestamps:true,
});

    const User = mongoose.model('User', userSchema);
module.exports = User;