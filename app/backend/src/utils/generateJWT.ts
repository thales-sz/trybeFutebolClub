import * as Jwt from 'jsonwebtoken';
import IUser from '../domain/entities/User';
import 'dotenv/config';

const { JWT_SECRET }: Jwt.JwtPayload = process.env;

const generateJWT = (user: IUser) => {
  const payload: Jwt.JwtPayload = {
    email: user.email,
    username: user.username,
    role: user.role,
  };

  const config: Jwt.SignOptions = {
    algorithm: 'HS256',
  };

  const token = Jwt.sign(payload, JWT_SECRET, config);

  return token;
};

export default generateJWT;
