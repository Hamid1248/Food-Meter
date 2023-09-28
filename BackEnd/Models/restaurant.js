const mongoose= require('mongoose')
const {Schema}=mongoose;
const restaurantSchema=new Schema({ 
    name:{type:String,required:true},
    branchAddress:{type:String,required:true},
    logoPath:{type: String,required:true},
    userRating:{type:Number,required:true},
    foodType:{type:String},

},
   {timestamps:true}
);
module.exports=mongoose.model('Restaurant',restaurantSchema,'restaurants');
