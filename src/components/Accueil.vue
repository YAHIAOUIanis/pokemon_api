<template>
<div>
    <div class="table-responsive"> 
      <sorted-table class="table table-striped w-auto" :values="values">        
        <thead class="thead-dark">
          <th scope="col">
            <sort-link name="id"> # </sort-link>
          </th>
          <th scope="col">
            Photo
          </th>                        
          <th scope="col">
            <sort-link name="name"> Nom </sort-link>
          </th>
          <th scope="col">
            Types
          </th>
        </thead>
        <template>
        <tbody>
              <tr v-for="(pokemon, index) in pokemons" :key="index">
                <td> {{pokemon.id + 1}} </td>  
                <td>
                  <img class="img-fluid w-5 mx-autos" :src="`${pokemon.sprites.front_default}`" alt="">
                </td>          
                  
                <td>
                  <router-link class="link" :to="`/pokemon/${pokemon.id + 1}`">
                    {{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}}
                  </router-link>  
                </td>
                <td>                
                  <ul :key="i" v-for="(element , i) in pokemon.abilities"> 
                    <li>{{ element.ability.name }}</li>
                  </ul>
                </td>                      
            </tr>                     
        </tbody>
        </template>
      </sorted-table>     
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Accueil',  
  data(){
    return {
      values: [],
      pokemons: null,
      loading: true,
      errored: false
    } 
  },
  async mounted(){
    let pokemons = []
    for (var i=0; i<20; i++){
      let url = 'https://pokeapi.co/api/v2/pokemon/' + (i+1);      
      await axios.get(url).then((response) => {        
        response.data.id = i;
        pokemons[i] = response.data;        
      }).catch(function (error) {        
        console.log(error);        
      }).finally(() => this.loading = false);      
    }
    this.pokemons = pokemons;
    this.values = pokemons;
    console.log(this.values);
  }
}
</script>

<style>

</style>