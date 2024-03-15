import { UserEntity } from 'src/auth/user.entity';
import { BaseInterfaceRepository } from 'src/repositories/base/base.interface.repository';

export interface UserRepositoryInterface
  extends BaseInterfaceRepository<UserEntity> {}
