import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  findOne(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  findAll(): User[] {
    return this.users;
  }

  create(user: User): boolean {
    this.users.push(user);
    return true;
  }

  update(id: string, user: User): User | undefined {
    let index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return;
    this.users[index] = user;
    return user;
  }
}
