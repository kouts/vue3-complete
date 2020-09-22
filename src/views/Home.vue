<template>
  <div class="container">
    <h1 class="mb-4">Pokémons</h1>
    <div class="form-row mb-4">
      <div v-for="starter in starters" :key="starter.name" class="col-sm-2">
        <card-pokemon :class="[selectedId !== starter.id && 'inactive']" @click="selectPokemon(starter.id)">
          <template #title>
            {{ starter.name }} #{{ starter.id }}
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
    <div v-if="evolutions.length" class="form-row mb-4">
      <div v-for="creature in evolutions" :key="creature.name" class="col-sm-2">
        <card-pokemon class="bg-light">
          <template #title>
            {{ creature.name }} #{{ creature.id }}
          </template>
          <template #content>
            <img class="card-img-top" loading="lazy" :src="creature.sprite" :alt="creature.name" />
          </template>
          <template #description>
            <span v-for="type in creature.types" :key="type" class="badge badge-pill badge-primary mr-2">
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
    const startersIds = [1, 4, 7];
    const starters = ref([]);
    const evolutions = ref([]);
    const selectedId = ref(0);

    const fetchPokemon = async(id) => {
      const response = await window.fetch(`${api}/${id}`);
      const data = await response.json();
      return {
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
        types: data.types.map(o => o.type.name)
      };
    };
    const fetchPokemons = async(ids) => await Promise.all(ids.map(id => fetchPokemon(id)));
    const fetchEvolutions = async(id) => await fetchPokemons([id + 1, id + 2]);

    const selectPokemon = async(id) => {
      evolutions.value = await fetchEvolutions(id);
      selectedId.value = id;
    };

    (async() => {
      starters.value = await fetchPokemons(startersIds);
      // console.log(starters);
    })();

    return {
      starters,
      evolutions,
      selectPokemon,
      selectedId
    };
  }
};
</script>

<style lang="scss" scoped>
  .inactive {
    cursor: pointer;
    opacity: 0.5;
    &:hover {
      opacity: 0.7;
    }
  }
</style>
