import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/repositories/user/user.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserEntity } from './user.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
})
export class AuthModule {}
