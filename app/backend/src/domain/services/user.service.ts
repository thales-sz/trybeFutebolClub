import { log } from 'console';
import UserModel from '../../database/models/user.model';
import IUser, { UserCredentials } from '../entities/User';

class UserService {
  private userModel;

  constructor() {
    this.userModel = UserModel;
  }

  public login = async (body: UserCredentials): Promise<IUser> => {
    log('Service');
    log(body.email);
    const user = await this.userModel.findOne({
      where: { email: body.email },
    });
    return user as IUser;
  };
}

export default UserService;
