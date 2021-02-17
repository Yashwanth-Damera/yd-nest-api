import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule } from './quest/quest.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';


@Module({
  imports: [QuestModule,TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'test.db',
    synchronize: true,
    entities: [],
  }), UserModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}