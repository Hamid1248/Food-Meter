const Joi = require("joi");
const Restaurant = require("../Models/restaurant");
const { BACKEND_SERVER_PATH } = require("../config/index");
const RestaurantDto = require("../dto/restaurant");

const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;
const restaurantController = {
  async getAll(req, res, next) {
    try {
      const restaurants = await Restaurant.find({});

      const restaurantDto = [];

      for (let i = 0; i < restaurants.length; i++) {
        const dto = new RestaurantDto(restaurants[i]);
        restaurantDto.push(dto);
      }

      return res.status(200).json({ restaurants: restaurantDto });
    } catch (error) {
      return next(error);
    }
  },
  async getById(req, res, next) {
    const getByIdSchema = Joi.object({
      id: Joi.string().regex(mongodbIdPattern).required(),
    });

    const { error } = getByIdSchema.validate(req.params);

    if (error) {
      return next(error);
    }

    let restaurant;

    const { id } = req.params;

    try {
      restaurant = await Restaurant.findOne({ _id: id });
    } catch (error) {
      return next(error);
    }

    const restaurantDto = new RestaurantDto(restaurant);

    return res.status(200).json({ restaurant: restaurantDto });
  },
};

module.exports = restaurantController;
