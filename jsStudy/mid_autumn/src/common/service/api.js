import axios from 'axios'
const HOST = SERVICE_URL

export default async function ({
  headers = '',
  url = '',
  method = 'post',
  data = {},
  params = {},
  ok = '',
  err = ''
}) {
  if (url) {
    try {
      const res = await axios({
        headers,
        method,
        url: HOST + url,
        data,
        params
      })
      if (res.status === 200) {
        ok && ok(res)
      } else {
        err && err(res)
      }
    } catch (err) {
      console.log(err)
    }
  }
}