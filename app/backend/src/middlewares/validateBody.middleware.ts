import { NextFunction, Request, Response } from 'express';
import Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const validateBody = (req: Request, _res: Response, next: NextFunction): void => {
  const loginBody = req.body;
  try {
    const { error } = loginSchema.validate(loginBody);
    if (error) {
      next(error);
    }
    next();
  } catch (err) {
    next(err);
  }
};

export default validateBody;
