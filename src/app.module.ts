import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './users/users.controller';
import { UserModule } from './users/users.module';

@Module({
  imports: [UserModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // all route
    // consumer.apply(Logger).forRoutes('*');

    // User route
    // consumer.apply(Logger).forRoutes('users');
    //or
    // consumer.apply(Logger).forRoutes(UserController);
  }
}
