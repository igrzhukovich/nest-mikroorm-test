import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { EntityManager } from '@mikro-orm/postgresql';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: EntityRepository<User>,
        private readonly entityManager: EntityManager
    ) { }

    async findAll() {
        const users = await this.userRepository.findAll();
        return { users };
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const user = new User(createUserDto.email, createUserDto.password);
        await this.entityManager.persistAndFlush(user);
        return user;
    }
}
