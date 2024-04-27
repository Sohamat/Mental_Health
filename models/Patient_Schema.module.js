
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/MentalHealth")

const Schema = mongoose.Schema;

const Patient_Schema = new Schema({
 
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
  },
  sum:{
    type:Number,
    unique: true,
  },
  medicalHistory:{
    type:String,
    required:true,
  }

});


// Create and export the Mongoose model based on the schema
const PatientModel = mongoose.model('PatientModel', Patient_Schema);

module.exports = PatientModel;
