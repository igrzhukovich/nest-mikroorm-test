import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user.entity';

@Module({
  imports: [MikroOrmModule.forRoot(), MikroOrmModule.forFeature({ entities: [User] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
