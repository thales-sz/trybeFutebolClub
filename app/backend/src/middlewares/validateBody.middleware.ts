import { NextFunction, Request } from 'express';
import Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const validateBody = (req: Request, res: Response, next: NextFunction) => {
  const loginBody = req.body;
  try {
    const { error } = loginSchema.valid(loginBody);
    if (error) {
      next(error);
    }
    next();
  } catch (err) {
    next(err);
  }
};

export default validateBody;
