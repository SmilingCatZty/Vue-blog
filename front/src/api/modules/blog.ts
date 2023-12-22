import type { UploaderAfterRead } from 'vant/lib/uploader/types'
import requester from '../axios'
import type { BlogInfoModel, PageModel } from '@/models/blog.model'

export const blogApi = {
  /**
   * 文件上传
   * @param file
   */
  uploadBlog: (file: File) => {
    return requester({
      url: `blog/upload`,
      method: 'post',
      params: file
    })
  },

  /**
   * 创建博客
   * @param blogInfo 博客信息
   */
  createBlog: (blogInfo: BlogInfoModel) => {
    return requester({
      url: 'blog/create',
      method: 'post',
      data: blogInfo
    })
  },

  /**
   * 查询博客列表
   * @param pageParams {page,size}
   */
  getBlogList: (pageParams: PageModel) => {
    return requester({
      url: `blog/list`,
      method: 'get',
      params: pageParams
    })
  },

  /**
   * 查询置顶博客
   */
  getTopBlogList: () => {
    return requester({
      url: `blog/top-list`,
      method: 'get'
    })
  },

  /**
   * 查询博客详情
   * @param blog_id
   */
  getBlogDetail: (blog_id: string) => {
    return requester({
      url: `blog/detail/${blog_id}`,
      method: 'get'
    })
  }
}
