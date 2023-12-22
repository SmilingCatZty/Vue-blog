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
import {
  FindBlogDto,
  FindBlogByAnyParams,
  FindBlogByTimeDto
} from './dto/find-blog.dto'

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
  async findBlogList(@Query() query: FindBlogDto) {
    const pageParams = <{ page: number; size: number }>{ page: 1, size: 10 }
    const { page, size, ...params } = query

    if (page) pageParams.page = Number(page)
    if (page) pageParams.size = Number(size)

    try {
      const blogTotal = (await this.blogService.findAll()).length
      const blogList = await this.blogService.findList(pageParams, params)
      return {
        total: blogTotal,
        blogList
      }
    } catch (error) {
      throw new InternalServerErrorException(error.msg)
    }
  }

  // 置顶博客列表
  @Get('top-list')
  async findTopList(@Query() page: FindBlogDto) {
    const pageParams = <{ page: number; size: number }>{ page: 1, size: 10 }
    if (page.page) pageParams.page = page.page
    if (page.size) pageParams.size = page.size
    try {
      const topBlogList = await this.blogService.findList(pageParams, {
        blog_is_top: true
      })
      return {
        blogList: topBlogList
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

  // 归档查询
  @Get('type-list')
  async findBlogListForType() {
    try {
      const res = await this.blogService.findTypeList()
      if (res) return res
    } catch (error) {
      throw new InternalServerErrorException(error.msg)
    }
  }

  // 归档查询 --- 年
  @Get('type-year/:year')
  async findBlogListForYear(@Param('blog_id') year: number) {
    try {
      const res = await this.blogService.findTypeListForYear(year)
      if (res) return res
    } catch (error) {
      throw new InternalServerErrorException(error.msg)
    }
  }
  // 归档查询 --- 月
  @Get('type-month')
  async findBlogListForMonth(@Query() query: FindBlogByTimeDto) {
    const { year, month } = query
    try {
      const res = await this.blogService.findTypeListForMonth(
        Number(year),
        Number(month)
      )
      if (res) return res
    } catch (error) {
      throw new InternalServerErrorException(error.msg)
    }
  }
}
