import {
  Controller,
  Post,
  Body,
  Query,
  InternalServerErrorException
} from '@nestjs/common'
import { BlogService } from './blog.service'
import { CreateBlogDto } from './dto/create-blog.dto'
import { UpdateBlogDto } from './dto/update-blog.dto'

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('create')
  async create(@Body() createBlogDto: CreateBlogDto) {
    console.log(createBlogDto)

    try {
      const createBlog = await this.blogService.create(createBlogDto)
      console.log(createBlog)
      return createBlog
    } catch (error) {
      throw new InternalServerErrorException(error.msg)
    }
  }

  @Post('upload')
  uploadBlog(@Body() uploadParams: any, @Query() uploadParam) {
    console.log('发送请求成功')
    console.log('uploadParams', uploadParams)
    console.log('uploadParam', uploadParam)
  }
}
