import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchQuary: ''
  },
  mutations: {
    // setup(state) {
    //   fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=bdebdb69&s=${state}`)
    //   .then(response => response.json())
    //   .then(result => {
    //     this.movies = result.Search;
        
    //   })
    // } 
  },
  actions: {
  },
  modules: {
  }
})
