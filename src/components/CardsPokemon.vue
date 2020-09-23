<template>
  <div v-for="pokemon in pokemons" :key="pokemon.name" class="col-sm-2">
    <card-pokemon
      :class="[(clickable && selectedId !== pokemon.id) && 'inactive clickable']"
      @click="$emit('select', pokemon.id)"
    >
      <template #title>
        {{ pokemon.name }} #{{ pokemon.id }}
      </template>
      <template #content>
        <img class="card-img-top" loading="lazy" :src="pokemon.sprite" :alt="pokemon.name" />
      </template>
      <template #description>
        <span v-for="type in pokemon.types" :key="type" class="badge badge-pill badge-primary mr-2">
          {{ type }}
        </span>
      </template>
    </card-pokemon>
  </div>
</template>

<script>
import CardPokemon from '@/components/CardPokemon.vue';

export default {
  components: {
    CardPokemon
  },
  props: {
    pokemons: {
      type: Array,
      default: () => []
    },
    selectedId: {
      type: Number,
      default: null
    },
    clickable: {
      type: Boolean,
      default: true
    }
  },
  emits: ['select']
};
</script>

<style lang="scss" scoped>
  .inactive {
    opacity: 0.5;
    &:hover {
      opacity: 0.7;
    }
  }
  .clickable {
    cursor: pointer;
  }
</style>
