const mongoose = require("mongoose");
const restaurant = require("./restaurant");
const user=require('./user')
const { Schema } = mongoose;
const bookingSchema = new Schema(
  {
    name: { type: String, required: true },
    restaurant: { type: mongoose.SchemaTypes.ObjectId, ref: "Restaurant" },
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    email:{type:String,required:true},
    date:{type:String,required:true},
    time:{type:String,required:true},
    guest:{type:Number,required:true},
    number:{type:String,required:true}
  },
  { timestamps: true }
);
module.exports = mongoose.model("Booking", bookingSchema, "bookings");
