const Joi = require("joi");
const Comment = require("../Models/comment");
const CommentDTO = require("../dto/comment");

const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;

const commentController = {
  async create(req, res, next) {
    const createCommentSchema = Joi.object({
      content: Joi.string().required(),
      user: Joi.string().regex(mongodbIdPattern).required(),
      restaurant: Joi.string().regex(mongodbIdPattern).required(),
    });

    const { error } = createCommentSchema.validate(req.body);
    if (error) {
      return next(error);
    }
    const { content, user, restaurant } = req.body;

    try {
      const newComment = new Comment({
        content,
        user,
        restaurant,
      });

      await newComment.save();
    } catch (error) {
      return next(error);
    }

    return res.status(201).json({ messgae: "comment created" });
  },
  async getByRestaurantId(req, res, next) {
    const getByIdSchema = Joi.object({
      id: Joi.string().regex(mongodbIdPattern).required(),
    });

    const { error } = getByIdSchema.validate(req.params);

    if (error) {
      return next(error);
    }

    let comments;
    const { id } = req.params;

    try {
      comments = await Comment.find({ restaurant: id }).populate("user");
    } catch (error) {
      return next(error);
    }
    let commentsDto = [];

    for (let i = 0; i < comments.length; i++) {
      const obj = new CommentDTO(comments[i]);
      commentsDto.push(obj);
    }
    return res.status(200).json({ data: commentsDto });
  },
};
module.exports = commentController;
