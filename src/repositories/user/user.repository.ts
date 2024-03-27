import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';
import { UserEntity } from 'src/auth/user.entity';
import { UserRepositoryInterface } from 'src/shared/interfaces/user.interface';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../base/base.abstract.repository';

export class UserRepository
  extends BaseAbstractRepository<UserEntity>
  implements UserRepositoryInterface
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const user = new UserEntity();
    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      if (error?.code === '23505') {
        throw new ConflictException('Username already exists!');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<string> {
    const { username, password } = authCredentialsDto;
    const user = await this.findOne({ where: { username } });

    if (user && (await user.validatePassword(password))) {
      return user.username;
    }
    return null;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
