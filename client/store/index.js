// store/index.js
const cookie = process.server ? require('cookie') : undefined

export const state = () => ({
  
})

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { req }) {

    let auth = null

    if (req.headers.cookie) {
      try {
        const parsed = cookie.parse(req.headers.cookie)
        let token = parsed.token
        await commit('auth/setToken', token)
      } catch (err) {
        console.log(err)
      }
    }

    await dispatch('auth/fetchUser')
    await dispatch('races/fetchRecentRaces')

  }
}