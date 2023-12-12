import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type BlogDocument = HydratedDocument<Blog>

@Schema({
  versionKey: false
})
export class Blog {
  @Prop()
  blog_id: string // 博客id

  @Prop()
  blog_type: string // 博客类型

  @Prop()
  blog_title: string // 博客标题

  @Prop()
  blog_content: string // 博客内容

  @Prop()
  blog_background: string // 博客背景图

  @Prop({ default: false })
  blog_is_top: boolean // 置顶博客

  @Prop()
  create_time: number // 创建时间

  // @Prop()
  // blog_file: Buffer
}

export const BlogSchema = SchemaFactory.createForClass(Blog)
