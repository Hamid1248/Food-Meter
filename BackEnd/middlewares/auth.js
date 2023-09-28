const JWTService=require('../services/JWTService.');
const User=require('../Models/user');
const userDto=require('../dto/user');
const UserDTO = require('../dto/user');
const auth= async (req,res,next)=>{
    const {refreshToken,accessToken}=req.cookies;
     try{
        if(!refreshToken|| !accessToken){
            const error={
                status:401,
                message:'unauthorized'
            }
            return next(error);
        }
        let _id;
        try{
             _id= JWTService.verifyAccessToken(accessToken);
        }
        catch(error){
            return next(error);
        }
        let user;
        try{
            user =await User.findOne({_id:_id});
        }
        catch(error){
              return next(error);
        }
        const userDto=new UserDTO(user);
        req.user=userDto;
        next();
     }
     catch(error){
        return next(error);
     }
    

}
module.exports=auth;