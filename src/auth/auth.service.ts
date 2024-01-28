import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto, Credentials } from './Credentials';
import { PasswordService } from './password.service';
import { TokenService } from './token.service';
import { UserInfo } from './UserInfo';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
    private readonly userService: UserService
  ) {}

  async validateUser(
    username: string,
    password: string
  ): Promise<UserInfo | null> {
    const user = await this.userService.user({
      where: { username },
    });
    if (user && (await this.passwordService.compare(password, user.password))) {
      const { id, roles } = user;
      const roleList = roles as string[];
      return { id, username, roles: roleList };
    }
    return null;
  }
  async login(credentials: Credentials): Promise<UserInfo> {
    const { username, password } = credentials;
    const user = await this.validateUser(
      credentials.username,
      credentials.password
    );
    if (!user) {
      throw new UnauthorizedException("The passed credentials are incorrect");
    }
    const accessToken = await this.tokenService.createToken({
      id: user.id,
      username,
      password,
    });
    return {
      accessToken,
      ...user,
    };
  }

  async register(userDto: CreateUserDto): Promise<UserInfo> {
    // You might want to validate the input and handle duplicate usernames
    var newUserDto = {
      ...userDto,
      roles: ['user'],
    };
    const newUser = await this.userService.createUser({ data: newUserDto });

    // You can customize this part based on your needs
    const accessToken = await this.tokenService.createToken({
      id: newUser.id,
      username: newUser.username,
      password: newUser.password
    });

    return {
      accessToken,
      id: newUser.id,
      username: newUser.username,
      roles: newUser.roles as string[],
    };
  }

  // Add the following method to your `AuthService` class

  async refreshToken(userId: string): Promise<string> {
    // Assuming you have a method to get the user based on userId
    const user = await this.userService.user({
      where: {
        id: userId,
      },
    });
    if (!user) throw new BadRequestException('User not found');

    // You can also check if the user has a valid refresh token (e.g. by checking its expiration date)

    // You can customize this part based on your needs
    const newAccessToken = await this.tokenService.createToken({
      id: user.id,
      username: user.username,
      password: user.password
    });

    return newAccessToken;
  }
}
