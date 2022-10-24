import { log } from 'console';
import { NextFunction, Request, Response } from 'express';
import * as Jwt from 'jsonwebtoken';

require('dotenv/config');

const JWT_SECRET: Jwt.Secret = process.env.JWT_SECRET || 'jwt_secret';

const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token || token === '') {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = Jwt.verify(token, JWT_SECRET);
    log(decoded);
  } catch (err) {
    next(err);
  }
};

export default validateJWT;
