<template>
  <div id="index">
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
            <sort-link name="types">Types</sort-link>
          </th>
          <th scope="col" style="text-align: left; width: 10rem;">
            Photo
          </th>
        </tr>
      </thead>
      <template #body="sort">
        <tbody>
          <tr v-for="value in sort.values" :key="value.id">
            <td>{{ value.order }}</td>
            <td>{{ value.name.charAt(0).toUpperCase() + value.name.slice(1) }}</td>
            <td>                
              <ul :key="i" v-for="(element , i) in value.abilities"> 
                <li>{{ element.ability.name }}</li>
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
export default {
  name: "index",
  data: function() {
    return {
      values: [
        {
          "abilities": [
              {
                "ability": {
                  "name": "overgrow",
                  "url": "https://pokeapi.co/api/v2/ability/65/"
                },
                "is_hidden": false,
                "slot": 1
              },
              {
                "ability": {
                  "name": "chlorophyll",
                  "url": "https://pokeapi.co/api/v2/ability/34/"
                },
                "is_hidden": true,
                "slot": 3
              }
            ],
            "name": "bulbasaur",
            "order": 1,
            "sprites": {
              "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
              "back_female": null,
              "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
              "back_shiny_female": null,
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
              "front_female": null,
              "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
              "front_shiny_female": null,
            },
            "types": [
              {
                "slot": 1,
                "type": {
                  "name": "grass",
                  "url": "https://pokeapi.co/api/v2/type/12/"
                }
              },
              {
                "slot": 2,
                "type": {
                  "name": "poison",
                  "url": "https://pokeapi.co/api/v2/type/4/"
                }
              }
            ],
            "weight": 69,
            "height": 7
        },
        {
          "abilities": [
              {
                "ability": {
                  "name": "overgrow",
                  "url": "https://pokeapi.co/api/v2/ability/65/"
                },
                "is_hidden": false,
                "slot": 1
              },
              {
                "ability": {
                  "name": "chlorophyll",
                  "url": "https://pokeapi.co/api/v2/ability/34/"
                },
                "is_hidden": true,
                "slot": 3
              },
            ],
            "name": "ivysaur",
            "order": 2,
            "sprites": {
              "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
              "back_female": null,
              "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
              "back_shiny_female": null,
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
              "front_female": null,
              "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
              "front_shiny_female": null,
            },
            "types": [
              {
                "slot": 1,
                "type": {
                  "name": "grass",
                  "url": "https://pokeapi.co/api/v2/type/12/"
                }
              },
              {
                "slot": 2,
                "type": {
                  "name": "poison",
                  "url": "https://pokeapi.co/api/v2/type/4/"
                }
              }
            ],
            "weight": 130,
            "height": 10
          }
      ],
      pokemons: null,
      loading: true,
      errored: false
    } 
  }
}
</script>

<style>

</style>