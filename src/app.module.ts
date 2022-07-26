import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    UsersModule, 
    // MongooseModule.forRoot('mongodb://localhost:27017/test'),
    MongooseModule.forRoot('mongodb+srv://zingsoft:ZingDad1@cluster0.hnmzy.mongodb.net/?retryWrites=true&w=majority'),
    ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'public'), exclude: ['/api*']}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
