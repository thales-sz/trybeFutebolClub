import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as Jwt from 'jsonwebtoken';
import 'dotenv/config';

const JWT_SECRET: Jwt.Secret = process.env.JWT_SECRET || 'jwt_secret';

const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  try {
    if (!token || token === '') {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
    }
    const decoded = Jwt.verify(token, JWT_SECRET);
    req.body.decoded = decoded;
    next();
  } catch (err) {
    res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
};

export default validateJWT;
