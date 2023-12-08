import type { UploaderAfterRead } from 'vant/lib/uploader/types'
import requester from '../axios'

export const blogApi = {
  uploadBlog: (file: File) => {
    return requester({
      url: `blog/upload`,
      method: "post",
      params: file
    })
  }
}
