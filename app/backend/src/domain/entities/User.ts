export interface UserCredentials {
  email: string;
  password: string;
}

export default interface IUser extends UserCredentials{
  id: number;
  email: string;
  role: string;
}
