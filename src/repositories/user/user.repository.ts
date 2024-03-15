import { InjectRepository } from '@nestjs/typeorm';
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
}
