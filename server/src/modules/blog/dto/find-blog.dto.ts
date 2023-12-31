import { Type } from 'class-transformer'
import { IsBoolean, IsDate, IsNumber, IsOptional, IsString } from 'class-validator'

export class FindBlogDto {
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  page?: number

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  size?: number

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  blog_is_top?: boolean // 置顶博客
}

export class FindBlogByTimeDto{
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  year?: number

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  month?: number
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

  @IsDate()
  create_time?: Date // 创建时间
}
