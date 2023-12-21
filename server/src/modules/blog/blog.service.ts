import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateBlogDto } from './dto/create-blog.dto'
import { FindBlogDto, FindBlogByAnyParams } from './dto/find-blog.dto'
import { BlogDocument, Blog } from './schema/blog.schema'
import { Model } from 'mongoose'

@Injectable()
export class BlogService {
  constructor(
    @InjectModel('Blog')
    private blogModel: Model<BlogDocument>
  ) {}

  /**
   * 创建博客
   * @param createBlogDto
   * @returns
   */
  async create(createBlogDto: CreateBlogDto) {
    const newBlog = new this.blogModel(createBlogDto)
    newBlog.blog_id = newBlog._id.toString()
    return await newBlog.save()
  }

  /**
   * 查找全部
   * @returns
   */
  async findAll(): Promise<Blog[]> {
    const blogList = this.blogModel.find().select('-_id').exec()
    return blogList
  }

  /**
   * 查找博客列表
   * @param page 页码、条数
   * @param data 需要查询的参数
   * @returns
   */
  async findList(
    page: FindBlogDto,
    data?: FindBlogDto
  ): Promise<Blog[]> {    
    const blogList = this.blogModel
      .find(data)
      .sort({ create_time: -1 })
      .skip(page.size * (page.page - 1)) // 分页
      .limit(page.size) // 数量限制
      .select('-_id') // 删除数据库返回的_id字段
      .exec()
    return blogList
  }

  /**
   * 根据博客id查找博客
   * @param blog_id 博客id
   * @returns
   */
  async findOneById(blog_id: string): Promise<Blog> {
    const blog = this.blogModel.findOne({ blog_id }).select('-_id').exec()
    return blog
  }
}
