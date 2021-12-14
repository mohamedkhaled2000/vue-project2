<template>
  <div>
    <header class="pt-14 pb-14 uppercase flex align-center justify-center">
      <h1 class="text-3xl md:text-4xl text-gray-400">
        the<strong class="text-black">movies</strong>database
      </h1>
    </header>

    <form class="flex align-center justify-center" @submit.prevent="setup">
      <input
        class="
          border-2 border-gray-300
          bg-gray-200
          transition
          focus:bg-gray-600
          text-gray-400
          w-4/5
          h-12
          px-5
          pr-16
          rounded-3xl
          text-lg
          focus:outline-none
        "
        type="text"
        placeholder="Search For an anime..."
        v-model="searchQuary"
      />
    </form>
    
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: "Header",
   methods:{
     setup() {
       this.$emit('headerSearch',this.searchQuary)
     }
   },

  data() {
    return{
    searchQuary: '',
    
    }
  },
  
  //   setup() {
  //   const searchQuary = ref("")
  //   const animaList = ref([])
  //   const HandleSearch = async () => {
  //     animaList.value = await fetch(`https://kitsu.io/api/edge/anime/q=${searchQuary}`).then(res => res.json()).then(data => data.resaluts)
  //     console.log(animaList.value);
  //   }
  //   return{
  //     searchQuary,
  //     animaList,
  //     HandleSearch
  //   }
    
  // }
// methods: {
//   setup() {
//     const movies = [];
//     fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=bdebdb69&s=${this.searchQuary}`)
//     .then(response => response.json())
//     .then(result => {
//       movies.values = result.Search;
//       console.log(movies.values);
//     })

//   }
  
  // }
}  
</script>
