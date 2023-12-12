import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateBlogDto } from './dto/create-blog.dto'
import { UpdateBlogDto } from './dto/update-blog.dto'
import { BlogDocument, Blog } from './schema/blog.schema'
import { Model } from 'mongoose'

@Injectable()
export class BlogService {
  constructor(
    @InjectModel('Blog')
    private blogModel: Model<BlogDocument>
  ) {}

  // 创建博客
  async create(createBlogDto: CreateBlogDto) {
    const newBlog = new this.blogModel(createBlogDto)
    newBlog.blog_id = newBlog._id.toString()
    return await newBlog.save()
  }
}
