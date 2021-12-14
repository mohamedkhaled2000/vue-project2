<template>

    <div class="card">
      <!-- <div class=" transform hover:scale-105 transition ">   -->
          <router-link :to="'/movie/' + moveis.imdbID" :movies="moveis">
          <img
              :src="moveis.Poster"
              :alt="moveis.Title"
          />
          <h3>{{ moveis.Title }}</h3>
          <div>
            <a href="#" class="text-sm px-1 ml-3 text-gray-400">{{moveis.Type}}</a>
            <a href="#" class="text-sm px-1 text-gray-400">{{moveis.Year}}</a>
          </div>
          </router-link>
      </div>

</template>

<script>
export default {
  name: "Cards",
  props: ['moveis']
  
};
</script>

<style scoped>
/* .max-w-xs{
    width: 11rem;
} */

.card{
	flex: 1 1 33%;
	width: 17%;
	max-width: 33%;
	padding: 0px 8px;
	margin-bottom: 16px;
  margin-top: 100px;
  display: inline-block;
  margin-left: 33px;
}

.card img{
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 16px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
		transition: 0.4s;
}
.card img:hover{transform: scale(1.05);}

.card 	h3 {
		padding: 16px;
		color: #313131;
		transition: .4s;
	}
.card 	h3:hover{
  color: #24C444;
}

@media screen AND (max-width: 600px)  {
  .card{

	width: 40%;
  max-width: 40%;

}
}
@media screen AND (max-width: 400px)  {
  .card{

	width: 100%;
  display: block;
  max-width: 80%;

}
}
</style>
