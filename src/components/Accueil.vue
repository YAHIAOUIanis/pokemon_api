<template>
  <div>    
    <div class="container p-4">
      <div class="row row-cols-1 row-cols-md-5">
        <pokemon :key="index" v-for="(pokemon, index) in pokemons" :id="index" :pokemon="pokemon"></pokemon>
      </div>
    </div>    
  </div>
</template>

<script>
import Pokemon from './Pokemon.vue'
import axios from 'axios'

export default {
  name: 'Accueil',
  components:{       
    'pokemon' : Pokemon
  },
  data(){
    return {
      pokemons: null,
      loading: true,
      errored: false
    } 
  },
  mounted(){
    axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then((reponse) => {
      this.pokemons = reponse.data.results;
      var i = 1;
      this.pokemons.forEach(element => {        
        element.id = i;
        i++;
      });
      console.log(this.pokemons);
    })
    .catch(error => {
        console.log(error)
        this.errored = true
    })
    .finally(() => this.loading = false);
  }
}
</script>

<style>

</style>
