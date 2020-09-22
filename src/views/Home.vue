<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            Content
          </div>
          <div class="card-footer">
            Card footer
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const api = 'https://pokeapi.co/api/v2/pokemon';
    const fetchData = async() => {
      const response = await window.fetch(`${api}/1`);
      const data = await response.json();
      const pokemon = {
        name: data.name,
        sprite: data.sprites.other['official-artwork'],
        types: data.types.map(o => ({ name: o.type.name }))
      };
      console.log(pokemon);
    };
    fetchData();
    return {
      //
    };
  }
};
</script>
