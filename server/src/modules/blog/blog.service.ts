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
  async findList(page: FindBlogDto, data?: FindBlogDto): Promise<Blog[]> {
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

  /**
   * 归档查询
   */
  async findTypeList() {
    const currentDate = new Date()
    return this.blogModel.aggregate([
      {
        $match: {
          create_time: { $lt: currentDate }
        }
      },
      {
        $project: {
          year: { $year: '$create_time' },
          month: { $month: '$create_time' },
          types: '$blog_type' // 假设博客类型存储在字段 blog_type 中
        }
      },
      {
        $group: {
          _id: { year: '$year', month: '$month' },
          count: { $sum: 1 },
          types: { $addToSet: '$types' }
        }
      },
      {
        $group: {
          _id: '$_id.year',
          monthList: {
            $push: {
              month: '$_id.month',
              count: '$count',
              types: '$types'
            }
          }
        }
      },
      {
        $project: {
          _id: 0,
          year: '$_id',
          monthList: 1
        }
      },
      {
        $sort: { year: -1 }
      }
    ])
  }

  /**
   * 归档查询 --- 年
   * @param year 年份
   */
  async findTypeListForYear(year: number) {
    const currentDate = new Date()
    return this.blogModel.aggregate([
      {
        $match: {
          create_time: {
            $lt: currentDate,
            $gte: new Date(`${year}-01-01`) // 查询2023年下的数据
          }
        }
      },
      {
        $project: {
          month: { $month: '$create_time' },
          day: { $dayOfMonth: '$create_time' },
          blog_title: '$blog_title',
          blog_id: '$_id'
        }
      },
      {
        $group: {
          _id: { month: '$month', day: '$day' },
          article: {
            $push: {
              blog_title: '$blog_title',
              blog_id: '$blog_id'
            }
          }
        }
      },
      {
        $group: {
          _id: '$_id.month',
          dayList: {
            $push: {
              day: '$_id.day',
              article: '$article'
            }
          }
        }
      },
      {
        $project: {
          _id: 0,
          month: '$_id',
          dayList: 1
        }
      },
      {
        $sort: { month: 1 }
      }
    ])
  }

  /**
   * 归档查询 --- 年 + 月
   * @param year 年份
   * @param month 月份
   */
  async findTypeListForMonth(year: number, month: number) {
    const startDate = new Date(year, month - 1, 1) // 构造查询的起始日期
    const endDate = new Date(year, month, 1) // 构造查询的结束日期
    return this.blogModel.aggregate([
      {
        $match: {
          create_time: {
            $gte: startDate,
            $lt: endDate
          }
        }
      },
      {
        $group: {
          _id: { day: { $dayOfMonth: '$create_time' } },
          Articlelist: {
            $push: {
              blog_title: '$blog_title',
              blog_id: '$_id',
              blog_type: '$blog_type',
              blog_content: '$blog_content',
              blog_background: '$blog_background',
              create_time: '$create_time'
            }
          }
        }
      },
      {
        $project: {
          _id: 0,
          day: '$_id.day',
          Articlelist: 1
        }
      },
      {
        $sort: { day: 1 }
      }
    ])
  }
}
