<template>
  <div class="container">
    <div class="form-row">
      <div v-for="starter in starters" :key="starter.name" class="col-sm-2">
        <card-pokemon>
          <template #title>
            {{ starter.name }}
          </template>
          <template #content>
            <img class="card-img-top" loading="lazy" :src="starter.sprite" :alt="starter.name" />
          </template>
          <template #description>
            <span v-for="type in starter.types" :key="type" class="badge badge-pill badge-primary mr-2">
              {{ type }}
            </span>
          </template>
        </card-pokemon>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import CardPokemon from '@/components/CardPokemon.vue';

export default {
  components: {
    CardPokemon
  },
  setup(props, ctx) {
    const api = 'https://pokeapi.co/api/v2/pokemon';
    const ids = [1, 4, 7];
    const starters = ref([]);

    const fetchPokemon = async(id) => {
      const response = await window.fetch(`${api}/${id}`);
      const data = await response.json();
      return {
        name: data.name,
        sprite: data.sprites.front_default,
        types: data.types.map(o => o.type.name)
      };
    };

    const fetchPokemons = async() => await Promise.all(ids.map(id => fetchPokemon(id)));
    (async() => {
      starters.value = await fetchPokemons();
      console.log(starters);
    })();

    return {
      starters
    };
  }
};
</script>
