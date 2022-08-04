// @ts-ignore
export const jeopardyApi = new axios.create({
  baseURL: 'https://jservice.io', // maybe neeed this? api/random
  timeout: 4000
})

// @ts-ignore
export const sandboxApi = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api',
  timeout: 4000
})