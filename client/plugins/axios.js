export default ({ $axios, store }) => {
  $axios.onRequest((config) => {
    if (store.state.auth.token) {
      config.headers.common['x-access-token'] = store.state.auth.token
    }
    config.baseURL = process.env.API_URL
    config.withCredentials = true
    return config
  })
}
