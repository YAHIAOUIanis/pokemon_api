<template>

<div class="container p-4">
 <div class="row">

    <div class="col-md-4">
      <img class="img-fluid w-100 mx-auto d-block shadow" src="@/assets/images/Pikachu.jpg" alt="">
    </div>

    <div class="col-md-5">
      <h3 class="my-3">{{ pokemon.name }}</h3>
      <h4>Type : </h4>
      <ul :key="index" v-for="(element , index) in pokemon.types"> 
          <li>{{ element.type.name }}</li>
      </ul>

      <p>Taille : {{pokemon.height}} </p>
      <p>Poids : {{pokemon.weight}} </p>      
      <h3>Capacités :</h3>
      <ul :key="index" v-for="(element , index) in pokemon.abilities"> 
          <li>{{ element.ability.name }}</li>
      </ul>
    </div>

  </div>
</div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'Informations',
    data(){
        return{
            id : this.$route.params.id,
            pokemon: [],
            loading: true,
            errored: false
        }
    },
    mounted(){
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${this.id}/`)
    .then((reponse) => {
      this.pokemon = reponse.data;
    })
    .catch(error => {
        console.log(error)
        this.errored = true
    })
    .finally(() => this.loading = false);
  },
}
</script>

<style>

</style>