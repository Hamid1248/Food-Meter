class RestaurantDTO{
    constructor(restaurant){
        this._id=restaurant._id;
        this.name=restaurant.name;
        this.branchAddress=restaurant.branchAddress;
        this.logoPath=restaurant.logoPath;
        this.userRating=restaurant.userRating;
        this.foodType;restaurant.foodType;
    }
}
module.exports=RestaurantDTO;