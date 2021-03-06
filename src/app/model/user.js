const mongoose = require('../../database/index');
const bcryptjs = require('bcryptjs');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,

    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    profile: {
        type: String,
        required: true,
    },
    passwordResetToken: {
        type: String,
        select: false,
    },
    passwordResetExpires: {
        type: Date,
        select: false,
    },

    createDAT: {
        type: Date,
        default: Date.now,
    },

});

UserSchema.pre('save', async function (next) {
    const hash = await bcryptjs.hash(this.password, 10);
    this.password = hash;

    next();
})

const User = mongoose.model('User', UserSchema);

module.exports = User;

