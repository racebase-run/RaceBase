// store/races.js
export const state = () => ({
  recentRaces: []
})

export const mutations = {
  setRecentRaces (store, data) {
    store.recentRaces = data
  }
}

export const actions = {
  async fetchRecentRaces ({ commit }) {

    let raceData = await this.$axios.$get('race/list/1/3')
    commit('setRecentRaces', raceData.docs)
  }
}