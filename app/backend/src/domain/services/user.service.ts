import UserModel from '../../database/models/user.model';
import { UserCredentials } from '../entities/User';

class UserService {
  private userModel = UserModel;

  public async login(body: UserCredentials) {
    const user = await this.userModel.findOne({
      where: { email: body.email },
    });
    return user;
  }
}

export default UserService;
