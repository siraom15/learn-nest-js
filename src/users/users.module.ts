import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
