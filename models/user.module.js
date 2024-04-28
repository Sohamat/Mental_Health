
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/MentalHealth")
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
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
  },
  risk :{
    type:Number ,
    default : 0
  }


});


UserModelSchema.pre("save" , async function(next){
  this.password = await bcrypt.hash(this.password , 5)
})



UserModelSchema.methods.getJWTToken = function () {
  // Convert _id to string
  const userId = this._id.toString();
  // Sign JWT token using the stringified _id
  return jwt.sign({ id: userId }, "wlrng;ksfb kfvj sfugbRWUOBVOSV", {
    expiresIn: 2
  });
}


UserModelSchema.methods.comparePassword = async function(enteredPass){
  return await bcrypt.compare(enteredPass , this.password);
}
//UserModelSchema.plugin(require(passportLocalMongoose));
// Create and export the Mongoose model based on the schema
const UserModel = mongoose.model('UserModel', UserModelSchema);

module.exports = UserModel;
