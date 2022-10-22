import * as Jwt from 'jsonwebtoken';
import IUser from '../domain/entities/User';
import 'dotenv/config';

const JWT_SECRET: Jwt.Secret = process.env.JWT_SECRET || 'jwt_secret';

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
