
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/MentalHealth")
const passportLocalMongoose = require('passport-local-mongoose');

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

UserModelSchema.plugin(require(passportLocalMongoose));

// Create and export the Mongoose model based on the schema
const UserModel = mongoose.model('UserModel', UserModelSchema);

module.exports = UserModel;
