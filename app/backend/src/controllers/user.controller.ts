import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { log } from 'console';
import UserService from '../domain/services/user.service';
import { UserCredentials } from '../domain/entities/User';

export default class UserController {
  private _userService: UserService;

  constructor(userService: UserService) {
    this._userService = userService;
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this._userService.login(req.body as UserCredentials);
      res.status(StatusCodes.OK).json(user);
    } catch (error) {
      log('Controller error');
      next(error);
    }
  }
}
