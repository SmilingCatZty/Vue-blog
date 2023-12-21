import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsOptional,
  IsString
} from 'class-validator'

export class CreateBlogDto {
  @IsString()
  blog_type: string // 博客类型

  @IsArray()
  @IsOptional()
  blog_labels: string[] // 博客标签

  @IsString()
  blog_title: string // 博客标题

  @IsString()
  blog_content: string // 博客内容

  @IsString()
  blog_background: string // 博客背景图

  @IsBoolean()
  blog_is_top: boolean // 置顶博客

  @IsDateString()
  create_time: Date // 创建时间
}
