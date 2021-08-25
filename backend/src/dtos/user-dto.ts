import { UserModelType } from "models/user-model";

export interface IUserDto {
  email: string;
  id: number;
  isActivated: boolean;
}

class UserDto implements IUserDto {
  constructor(model: UserModelType) {
    this.email = model.email;
    this.id = model.id;
    this.isActivated = model.isActivated;
  }

  email: string;

  id: number;

  isActivated: boolean;
}
export default UserDto;
