import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { EntityRepository } from '@mikro-orm/core';
// import { InjectRepository } from '@mikro-orm/nestjs'
// import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // constructor(
  //   @InjectRepository(User)
  //   private readonly userRepository: EntityRepository<User>,
  // ) { }

  // @Get()
  // async findAll() {
  //   const users = await this.userRepository.findAll();
  //   return { users };
  // }
}