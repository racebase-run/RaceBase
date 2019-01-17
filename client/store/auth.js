// store/auth.js

import decode from 'jwt-decode'
import Cookies from 'universal-cookie'

import { setToken, resetToken } from '~/utils/auth'

const cookies = new Cookies(); 

export const state = () => ({
  user: {}, 
  token: null
})

export const getters = {
  isLoggedIn: (state, getters) => {
    const token = state.token ? state.token : false
    let authorized = !!token && !getters.isTokenExpired()
    return authorized
  }, 
  getId: (state) => () => {
    if (!state.token) { return null }
    const token = decode(state.token)
    return token.id
  },
  isTokenExpired: (state, getters) => () => {
    const expirationDate = getters.getTokenExpirationDate()
    return expirationDate < new Date()
  }, 
  getTokenExpirationDate: (state) => () => {
    if (!state.token) { return null }
    const token = decode(state.token)
    if (!token.exp) { return null }
    const date = new Date(0)
    date.setUTCSeconds(token.exp)
    return date;
  }
}

export const mutations = {
  setToken (state, token) {
    state.token = token
  },
  setUser (state, user) {
    state.user = user
  }, 
  clearToken (state) {
    state.token = ""
  }, 
  clearUser (state) {
    state.user = {}
  }
}

export const actions = {
  async fetchUser(store) {
    if (store.getters.isLoggedIn) {
      let user = await this.$axios.$get('user/' + store.getters.getId())
      .catch((err) => {
        console.log("Error fetching user... " + err.response.data.message)
      })

      if (user)
        store.commit('setUser', user)
    }
  }, 
  async login ({ commit, dispatch }, input) {

    let res = await this.$axios.$post('auth/login', {
      email: input.email,
      password: input.password
    }, {
      withCredentials: true
    })

    if (res.error) {
      return { error: true, message: res.error }
    }

    else {
      setToken(res.token)
      await commit('setToken', res.token)
      dispatch('fetchUser')
      return { error: false, message: "Successfully logged in.", token: res.token }
    }

  }, 
  async logout ({ commit, dispatch }) {
    resetToken()
    this.$router.go()
    await commit('clearUser')
    await commit('clearToken')
    return Promise.resolve()
  }
}