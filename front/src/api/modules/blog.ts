import type { UploaderAfterRead } from 'vant/lib/uploader/types'
import requester from '../axios'
import type { BlogInfoModel } from '@/models/blog.model'
import { data } from 'autoprefixer'

export const blogApi = {
  uploadBlog: (file: File) => {
    return requester({
      url: `blog/upload`,
      method: 'post',
      params: file
    })
  },

  /**
   * 创建博客
   * @param blogInfo
   * @returns
   */
  createBlog: (blogInfo: BlogInfoModel) => {
    return requester({
      url: 'blog/create',
      method: 'post',
      data: blogInfo
    })
  }
}
