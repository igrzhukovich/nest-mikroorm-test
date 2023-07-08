import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        const user = await this.userService.createUser(createUserDto);
        return { message: 'User registered successfully', user };
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
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
