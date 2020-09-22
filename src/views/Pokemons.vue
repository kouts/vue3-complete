<template>
  <div class="container">
    <h1 class="mb-4">Pokémons</h1>
    <div class="form-row mb-4">
      <cards-pokemon :pokemons="starters" :selected-id="selectedId" @select="selectPokemon" />
    </div>
    <div v-if="evolutions.length">
      <h3>{{ selectedName }}'s evolutions</h3>
      <div class="form-row mb-4">
        <cards-pokemon :pokemons="evolutions" :clickable="false" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import CardsPokemon from '@/components/CardsPokemon.vue';

export default {
  components: {
    CardsPokemon
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

    const selectedName = computed(() => {
      return starters.value.find((o) => o.id === selectedId.value)?.name;
    });

    (async() => {
      starters.value = await fetchPokemons(startersIds);
      // console.log(starters);
    })();

    return {
      starters,
      evolutions,
      selectPokemon,
      selectedId,
      selectedName
    };
  }
};
</script>
