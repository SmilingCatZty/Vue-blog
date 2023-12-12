import {
  Controller,
  Post,
  Body,
  Query,
  InternalServerErrorException,
  Get,
  Param
} from '@nestjs/common'
import { BlogService } from './blog.service'
import { CreateBlogDto } from './dto/create-blog.dto'
import { UpdateBlogDto } from './dto/update-blog.dto'
import { FindBlogDto, FindBlogByAnyParams } from './dto/find-blog.dto'

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('create')
  async create(@Body() createBlogDto: CreateBlogDto) {
    try {
      const createBlog = await this.blogService.create(createBlogDto)
      return createBlog
    } catch (error) {
      throw new InternalServerErrorException(error.msg)
    }
  }

  // 文件上传
  @Post('upload')
  uploadBlog(@Body() uploadParams: any, @Query() uploadParam) {
    console.log('发送请求成功')
    console.log('uploadParams', uploadParams)
    console.log('uploadParam', uploadParam)
  }

  // 博客列表
  @Get('list')
  async findBlogList(@Query() page: FindBlogDto = { page: 1, size: 10 }) {
    try {
      const blogTotal = (await this.blogService.findAll()).length
      const topBlogList = await this.blogService.findList(page, {
        blog_is_top: true
      })
      const blogList = await this.blogService.findList(page)
      return {
        total: blogTotal,
        topList: topBlogList,
        blogList
      }
    } catch (error) {
      throw new InternalServerErrorException(error.msg)
    }
  }

  // 博客详情
  @Get('detail/:blog_id')
  async findBlog(@Param('blog_id') blog_id: string) {
    const blog = await this.blogService.findOneById(blog_id)
    return blog
  }
}
