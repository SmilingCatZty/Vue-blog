import { Type } from 'class-transformer'
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'

export class FindBlogDto {
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  page?: number

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  size?: number
}

export class FindBlogByAnyParams {
  @IsString()
  blog_type?: string // 博客类型

  @IsString()
  blog_title?: string // 博客标题

  @IsString()
  blog_content?: string // 博客内容

  @IsString()
  blog_background?: string // 博客背景图

  @IsBoolean()
  blog_is_top?: boolean // 置顶博客

  @IsNumber()
  create_time?: number // 创建时间
}
