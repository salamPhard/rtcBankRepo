const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false, // don't return password by default in queries
    },
    phone: {
      type: String,
      required: true,
    },
     
    dob: {
      type: String,
      required : true,
    },
     image: 
      {
        type: String, // URLs to uploaded image
      },
      kycType : {
      enum : ["bvn", "nin"],
      type: String,
      required:true
    },
    bvn: {
      type: String,
      trim: true,
    },
      nin: {
      type: String,
      trim: true,
    },
    accountNumber :
    {
      type:String,
      unique: true,
      sparse : true
    },
    isKycVerified:
    {
      type: Boolean,
      default : false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
