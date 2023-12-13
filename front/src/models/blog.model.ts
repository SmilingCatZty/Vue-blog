export type BlogInfoModel = {
  blog_type: string // 博客类型
  blog_title: string // 博客标题
  blog_digest: string // 博客简介
  blog_content: string // 博客内容
  blog_background: string // 博客背景图
  blog_is_top: boolean // 置顶博客
  create_time: number // 创建时间
}

export type PageModel = {
  page: number // 页码
  size: number // 条数
}
