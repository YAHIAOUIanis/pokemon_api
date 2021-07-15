<template>
  <div id="index">

    <input v-model="search" class="form-control" placeholder="Filter pokemons by id or name">

    <sorted-table :values="values">
      <thead>
        <tr>
          <th scope="col" style="text-align: left; width: 10rem;">
            <sort-link name="order">ID</sort-link>
          </th>
          <th scope="col" style="text-align: left; width: 10rem;">
            <sort-link name="name">Name</sort-link>
          </th>
          <th scope="col" style="text-align: left; width: 10rem;">
            Types
          </th>
          <th scope="col" style="text-align: left; width: 10rem;">
            Photo
          </th>
        </tr>
      </thead>
      <template #body="sort">
        <tbody>          
          <tr v-for="value in sort.values" :key="value.id">
            <td>{{ value.id }}</td>
            <td>
              <router-link class="link" :to="`/pokemon/${value.id}`">
                {{ value.name | capitalize }}
              </router-link>
            </td>
            <td>                
              <ul :key="i" v-for="(element , i) in value.abilities"> 
                <li>{{ element.ability.name | capitalize }}</li>
              </ul>
            </td>              
            <td>
              <img :src="`${value.sprites.front_default}`">
            </td>
          </tr>
        </tbody>
      </template>
    </sorted-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "index",
  data: function() {
    return {
      values: [],      
      loading: true,
      errored: false,
      search: ''
    }  
  },
  async mounted(){
    let values = [];
    for (var i=0; i<20; i++){
      let url = 'https://pokeapi.co/api/v2/pokemon/' + (i+1);      
      await axios.get(url).then((response) => {        
        values[i] = response.data;        
      }).catch(function (error) {        
        console.log(error);        
      }).finally(() => this.loading = false);      
    }    
    this.values = values;
    console.log(this.values);
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style>

</style>