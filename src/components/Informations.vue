<template>
<div class="row justify-content-center m-5">

  <div class="card w-25">
    <img class="mx-auto w-50" :src="`${pokemon.sprites.front_default}`">
    <div class="card-body">
      <h3 class="card-title text-primary text-center">
        {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
      </h3>    
      <hr>
      <h4>Type(s) : </h4>
      <ul :key="index" v-for="(element , index) in pokemon.types"> 
          <li>{{ element.type.name }}</li>
      </ul>
      <hr>
      <h5>Taille : {{pokemon.height}} </h5>      
      <h5>Poids : {{pokemon.weight}} </h5>      
      <hr>  
      <h4>Capacité(s) :</h4>
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