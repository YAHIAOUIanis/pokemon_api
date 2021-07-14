<template>        
         <tr>
              <td> {{id}} </td>  
              <td>
                <img class="img-fluid w-5 mx-autos" :src="`${pokemon.sprites.front_default}`" alt="">
              </td>          
                
              <td>
                <router-link class="link" :to="`/pokemon/${id}`">
                  {{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}}
                </router-link>  
              </td>
              <td>                
                <ul :key="index" v-for="(element , index) in pokemon.abilities"> 
                  <li>{{ element.ability.name }}</li>
                </ul>
              </td>                      
         </tr>         
</template>

<script>
export default {
  name: "Pokemon",
  props: ["pokemon", "id"],
};
</script>

<style>
</style>