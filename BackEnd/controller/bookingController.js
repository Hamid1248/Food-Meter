const Joi = require("joi");
const Booking = require("../Models/booking");
const BookingsDto=require('../dto/booking')

const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;
const bookingController = {
  async create(req, res, next) {
    //validate user data
    const userBookingSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      restaurant: Joi.string().regex(mongodbIdPattern).required(),
      user: Joi.string().regex(mongodbIdPattern).required(),
      number: Joi.string()
        .length(11)
        .pattern(/^[0-9]+$/)
        .required(),
      date: Joi.string().required(),
      time: Joi.string().required(),
      guest:Joi.number()
    });

    const { error } = userBookingSchema.validate(req.body);
    if (error) {
      return next(error);
    }
    const { name, email, user, restaurant,number,guest, date, time, } = req.body;

    try {
      const newBooking = new Booking({
        name,
        email,
        number,
        guest,
        date,
        time,
        user,
        restaurant,
      });

      await newBooking.save();
    } catch (error) {
      return next(error);
    }

    return res.status(201).json({ message: "Booking Done" });
  },

  async getByUserId(req, res, next) {
    const getByIdSchema = Joi.object({
      id: Joi.string().regex(mongodbIdPattern).required(),
    });

    const { error } = getByIdSchema.validate(req.params);

    if (error) {
      return next(error);
    }

    let bookings;
    const { id } = req.params;

    try {
      bookings = await Booking.find({ user: id }).populate("restaurant");
    } catch (error) {
      return next(error);
    }
    let bookingsDto = [];

    for (let i = 0; i < bookings.length; i++) {
      const obj = new BookingsDto(bookings[i]);
      bookingsDto.push(obj);
    }
    return res.status(200).json({ data: bookingsDto });
  
  },
};
module.exports = bookingController;
