import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().messages({
      'any.required': 'Title is a required field',
      'string.empty': 'Title should not be empty',
      'string.min': 'Title should have a minimum length of 3 characters',
      'string.max': 'Title should have a maximum length of 50 characters',
      'string.trim': 'Title must not have leading or trailing whitespace'
    }),
    description: Joi.string().required().min(3).max(255).trim().strict().messages({
      'any.required': 'Description is a required field',
      'string.empty': 'Description should not be empty',
      'string.min': 'Description should have a minimum length of 3 characters',
      'string.max': 'Description should have a maximum length of 255 characters',
      'string.trim': 'Description must not have leading or trailing whitespace'
    })
  })

  try {
    // Chỉ định abortEarly: false để trường hợp có nhiều ỗi validation thì trả về tất cả lỗi
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    // Validate dữ liệu xong xuôi hợp lệ thì chuyển sang middleware tiếp theo
    next()
  } catch (error) {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: new Error(error).message
    })
  }
}

export const boardValidation = {
  createNew
}