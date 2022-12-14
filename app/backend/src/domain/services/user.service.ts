import * as bcryptjs from 'bcryptjs';
import UserModel from '../../database/models/user.model';
import { UserCredentials } from '../entities/User';
import generateJWT from '../../utils/generateJWT';

class UserService {
  private userModel: typeof UserModel;

  constructor() {
    this.userModel = UserModel;
  }

  public login = async (body: UserCredentials): Promise<string | boolean> => {
    const user = await this.userModel.findOne({
      where: { email: body.email },
    });
    if (user && bcryptjs.compareSync(body.password, user.password)) {
      return generateJWT(user);
    }
    return false;
  };
}

export default UserService;
