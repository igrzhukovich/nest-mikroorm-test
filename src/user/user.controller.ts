import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        const user = await this.userService.createUser(createUserDto);
        return { message: 'User registered successfully', user };
    }
}
