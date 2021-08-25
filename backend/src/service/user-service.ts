import UserModel from "models/user-model";

import * as bcrypt from "bcrypt";
import * as uuid from "uuid";
import UserDto from "dtos/user-dto";
import mailService from "./mail-service";
import tokenService from "./token-service";

class UserService {
  async registration(email: string, password: string) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error(
        `Пользователь с почтовым адресом ${email} уже существует`
      );
    }

    const hashPassword = await bcrypt.hash(password, 3);

    const activationLink = uuid.v4(); // random string

    const user = await UserModel.create({ email, password: hashPassword });

    await mailService.sendActivationMail(email, activationLink);

    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}

export default new UserService();
