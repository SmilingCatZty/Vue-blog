import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { BlogModule } from './modules/blog/blog.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/personal-blog'),
    BlogModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
