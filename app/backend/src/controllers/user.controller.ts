import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserService } from '../domain/services';
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
          .json({ message: 'Incorrect email or password' });
      }
      return res.status(StatusCodes.OK).json({ token });
    } catch (error) {
      next(error);
    }
  };

  public userRole = (req: Request, res: Response) => {
    const { role } = req.body.decoded;
    return res.status(StatusCodes.OK).json({ role });
  };
}
