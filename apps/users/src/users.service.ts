import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { GraphQLError } from 'graphql';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: '123',
      email: 'asdf',
      password: 'sdf',
    },
    {
      id: '1',
      email: 'shishirkaji@gmail.com',
      password: 'asdfasdf',
    },
  ];

  create(createUserInput: CreateUserInput) {
    const user = this.users.find((user) => user.id === createUserInput.id);
    if (user) {
      throw new GraphQLError('User exists');
    }

    this.users.push(createUserInput);

    return createUserInput;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
