const Joi = require("joi");
const User = require("../Models/user");
const bcrypt = require("bcryptjs");
const JWTService = require("../services/JWTService.");
const UserDTO = require("../dto/user");
const RefreshToken = require("../Models/tokens");
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;
const authController = {
  async register(req, res, next) {
    //validate user data
    console.log(req.body.email)
    console.log(req.body.name)
    console.log(req.body.password)
    console.log(req.body.number)
    const userRegistrationSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().pattern(passwordPattern).required(),
      confirmPassword: Joi.ref("password"),
      number: Joi.string()
        .length(11)
        .pattern(/^[0-9]+$/)
        .required(),
      role: Joi.string().required(),
    });

    const { error } = userRegistrationSchema.validate(req.body);
    if (error) {
      return next(error);
    }
    const { name, email, password, number, role } = req.body;

    try {
      const emailAlreadyUse = await User.exists({ email });
      const numberAlreadyUse = await User.exists({ number });

      if (emailAlreadyUse) {
        const error = {
          status: 409,
          message: "Email already registered, use another email!",
        };
        return next(error);
      }
      if (numberAlreadyUse) {
        const error = {
          status: 409,
          message: "Number already registered, use another number!",
        };
        return next(error);
      }
    } catch (error) {
      return next(error);
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    //store data
    let accessToken;
    let refreshToken;
    let user;

    try {
      const registerUser = new User({
        name,
        email,
        password: hashedPassword,
        number,
        role,
      });
      user = await registerUser.save();

      accessToken = JWTService.signAccessToken({ _id: user._id }, "30m");
      refreshToken = JWTService.signRefreshToken({ _id: user._id }, "60m");
    } catch (error) {
      return next(error);
    }
    //Storerefresh token in db
    await JWTService.storeRefreshToken(refreshToken, user._id);

    //send tokens in cookie
    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: "none", // Set the sameSite option
    secure: true, 
    });
    res.cookie("refreshToken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: "none", // Set the sameSite option
    secure: true, 
    });
    const userDto = new UserDTO(user);
    return res.status(201).json({ user: userDto, auth: true });
  },

  async login(req, res, next) {
    // 1. validate user input
    // 2. if validation error, return error
    // 3. match username and password
    // 4. return response
    console.log(req.body.email)
    console.log(req.body.password)
    const userLoginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().pattern(passwordPattern).required(),
    });

    const { error } = userLoginSchema.validate(req.body);

    if (error) {
      return next(error);
    }

    const { email, password } = req.body;

    // const username = req.body.username
    // const password = req.body.password

    let user;

    try {
      // match username
      user = await User.findOne({ email: email });

      if (!user) {
        const error = {
          status: 401,
          message: "Invalid email or password",
        };

        return next(error);
      }

      // match password
      // req.body.password -> hash -> match

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        const error = {
          status: 401,
          message: "Invalid password",
        };

        return next(error);
      }
    } catch (error) {
      return next(error);
    }

    const accessToken = JWTService.signAccessToken({ _id: user._id }, "30m");
    const refreshToken = JWTService.signRefreshToken({ _id: user._id }, "60m");

    //update refresh token in database
    try {
      await RefreshToken.updateOne(
        {
          _id: user._id,
        },
        { token: refreshToken },
        { upsert: true }
      );
    } catch (error) {
      return next(error);
    }

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      sameSite: "none", // Set the sameSite option
    secure: true, 
    });
    res.cookie("refreshToken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      sameSite: "none", // Set the sameSite option
    secure: true, 
    });
    const userDto = new UserDTO(user);
    return res.status(200).json({ user: userDto, auth: true });
  },

  async logout(req, res, next) {
    const { refreshToken } = req.cookies;

    try {
      await RefreshToken.deleteOne({ token: refreshToken });
    } catch (error) {
      return next(error);
    }

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    res.status(200).json({ user: null, auth: false });
  },

  async refresh(req, res, next) {
    // 1. get refreshToken from cookies
    // 2. verify refreshToken
    // 3. generate new tokens
    // 4. update db, return response

    const originalRefreshToken = req.cookies.refreshToken;

    let id;

    try {
      id = JWTService.verifyRefreshToken(originalRefreshToken)._id;
    } catch (e) {
      const error = {
        status: 401,
        message: "Unauthorized",
      };

      return next(error);
    }

    try {
      const match = RefreshToken.findOne({
        _id: id,
        token: originalRefreshToken,
      });

      if (!match) {
        const error = {
          status: 401,
          message: "Unauthorized",
        };

        return next(error);
      }
    } catch (e) {
      return next(e);
    }

    try {
      const accessToken = JWTService.signAccessToken({ _id: id }, "30m");

      const refreshToken = JWTService.signRefreshToken({ _id: id }, "60m");

      await RefreshToken.updateOne({ _id: id }, { token: refreshToken });

      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        sameSite: "none", // Set the sameSite option
    secure: true, 
      });

      res.cookie("refreshToken", refreshToken, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        sameSite: "none", // Set the sameSite option
    secure: true, 
      });
    } catch (e) {
      return next(e);
    }

    const user = await User.findOne({ _id: id });

    const userDto = new UserDTO(user);

    return res.status(200).json({ user: userDto, auth: true });
  },
};
module.exports = authController;
