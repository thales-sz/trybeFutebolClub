import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { log } from 'console';
import UserService from '../domain/services/user.service';
import { UserCredentials } from '../domain/entities/User';

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public login = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const userCredentials: UserCredentials = req.body;
      const token = await this.userService.login(userCredentials);
      if (!token) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ message: 'Invalid username or password' });
      }
      return res.status(StatusCodes.OK).json({ token });
    } catch (error) {
      log(`Controller error: ${error}`);
      next(error);
    }
  };
}
