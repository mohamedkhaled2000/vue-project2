<template>
  <div>

  <Header @headerSearch='setup'/>
  <div v-if="movies.length > 0">
    <Cards v-for="movie in movies" :key="movie.imdbID" :moveis="movie" />
  </div>
  <div v-else>
    <h3 class="mt-12 text-center text-3xl text-gray-400">Sorry, we have no results...</h3>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Cards from '@/components/Cards.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Cards
  },
  data() {
    return{
    searchQuary: '',
    movies: []
    }
  },

  methods: {
  setup(value) {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=bdebdb69&s=${value}`)
    .then(response => response.json())
    .then(result => {
      this.movies = result.Search;
      
    })
  } 
  // setup() {
  //   this.$store.commit('setup')
  // }
  }
}
</script>

<style scoped>
.max-w-xs{
    width: 11rem;
}
</style>
