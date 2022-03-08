import { Inject, Injectable } from '@nestjs/common';
import { User } from '@components/user/entity/user.entity';
import { UserRepositoryInterface } from '@components/user/interface/user.repository.interface';
import { UserServiceInterface } from '@components/user/interface/user.service.interface';
import { CreateUserDto } from '@components/user/dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  public async create(userDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.email = userDto.email;
    user.password = userDto.password;
    user.createdAt = new Date()
    user.userId = uuidv4()
    return this.userRepository.create(user);
  }
}
