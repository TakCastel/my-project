import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const api = {
  url: 'https://newsapi.org/v2',
  options: {
    headers: {
      Authorization: 'Bearer 99ce1a1e49504d6ba381a0b75226c040'
    }
  }
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      news: [],
    },
    actions: {
      async GET_NEWS ({ commit }) {
        const { data } = await axios.get(api.url + '/top-headlines?country=fr', api.options)
        commit('SET_NEWS', data)
      }
    },
    mutations: {
      SET_NEWS: function (state, data) {
        state.news = data
      }
    }
  })
}

export default createStore