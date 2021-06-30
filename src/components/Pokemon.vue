<template>

  <div class="col mb-4">
    <div class="card h-150 shadow">

      <div class="card-body">         
         <router-link class="link" :to="`/pokemon/${pokemon.id}`">
            <h3 class="card-title text-center">{{ pokemon.name }}</h3>
            <img class="img-fluid w-100 mx-auto d-block shadow" src="@/assets/images/Pikachu.jpg" alt="">
            <p> ID = {{pokemon.id}} </p>

         </router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Pokemon",
  props: ["pokemon"],
};
</script>

<style>
</style>