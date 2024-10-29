import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true // Optional: Normalize emails to lowercase
    },
    user_name: {
        type: String,
    },
    phone: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true // Ensure password is required
    },
    status: {
        type: Number,
        default: 0
    },
    token: {
        type: String,
    },
    last_login: {
        type: Date,
        default: null
    },
    extra_detail: {
        type: String,
    },
    type: {
        type: Number,
        default: 0
    },
    allowed_urls: {
        type: [String], // Using an array of strings
        default: []
    },
    picture: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Schema method to compare password
UserSchema.methods.comparePassword = async function (passwords) {
    return bcrypt.compare(passwords, this.password);
};


UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

const User = mongoose.model('User', UserSchema);
export default User;
