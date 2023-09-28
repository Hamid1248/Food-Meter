class UserDTO{
    constructor(user){
        this._id = user._id;
        this.email = user.email;
        this.name=user.name;
    }
};

module.exports = UserDTO;