import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TranslationModule } from './translation/translation.module';

@Module({
  imports: [MikroOrmModule.forRoot(), UserModule, TranslationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
