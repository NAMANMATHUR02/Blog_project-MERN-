const express = require('express')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    }
});

//We are hashing the password
// Encrypt password
// let hashedPassword;
// try {
//   hashedPassword = await bcrypt.hash(password, 12);
// } catch (err) {
//   const error = new HttpError("Password encryption failed", 500);
//   return next(error);
// }
module.exports = mongoose.model('user', userSchema);