// Define your Mongoose model
const mongoose = require('mongoose');

// Define the schema for your model
const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
 
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

// Create and export the Mongoose model based on the schema
const UserModel = mongoose.model('UserModel', UserModelSchema);

module.exports = UserModel;
