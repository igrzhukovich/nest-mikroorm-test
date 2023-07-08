import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { EntityManager } from '@mikro-orm/postgresql';
import * as argon2 from 'argon2';
import { LoginUserDto } from './dto/login-user.dto';

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
        const password = await argon2.hash(createUserDto.password);
        const user = new User(createUserDto.email, password);

        await this.entityManager.persistAndFlush(user);
        return user;
    }

    async login(loginDto: LoginUserDto) {
        const { email, password } = loginDto;
        const user = await this.entityManager.findOne(User, { email });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        const passwordMatch = await argon2.verify(user.password, password);
        if (!passwordMatch) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return { message: 'Login successful' };
    }
}
