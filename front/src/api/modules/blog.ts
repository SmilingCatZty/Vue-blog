import requester from '../axios'

export const blogApi = {
  uploadBlog: () => {
    return requester({
      url: `blog/upload`,
      method: "post",
    })
  }
}
