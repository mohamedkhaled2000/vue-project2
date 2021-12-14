<template>
  <div>
  <Header @headerSearch='setup'/>
    <h2>details {{movie.Title}} </h2>
  </div>
</template>

<script>
// import { useRoute } from 'vue-router';
// import Header from '@/components/Header.vue'

export default {
  data() {
    return {
      id: this.$route.params.id,
      movie: [],
    };
  },
  setup() {
    // const route = useRoute();
    const id = this.$route.params.id
    fetch(
      `http://www.omdbapi.com/?apikey=bdebdb69&i=${id}&plot=full`
    )
      .then((response) => response.json())
      .then((result) => {
        this.movie = result.Search;
        console.log(this.movie);
      });
  },
};
</script>
