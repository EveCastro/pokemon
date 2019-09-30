const dataPoke = POKEMON.pokemon;
// Mostrando con template
const template = (list) => {
  let templateListPoke = '';
  // recorremos nuestro array con forEach
  list.forEach((dataPoke) => {
    // creamos un template(string) por cada elemento del array
    const card = `
      <div class='card-link'>
        <article class='blog-card'>
          <img class='post-image' src='${dataPoke.img}' />
          <h3 class='post-id'>${dataPoke.id}</h3>
          <div class='article-details'>
            <h4 class='post-title'>${dataPoke.name}</h4>
            <h6 class='post-category'>${dataPoke.type}</h6>
          </div>
        </article>
      </div>
    `;
    templateListPoke += card;
  });
  document.getElementById('allThePokemones').innerHTML = templateListPoke;
};
template(dataPoke);



// Mostrar Funcion Filter con Select 
document.getElementById('typepokemon').addEventListener('change', (evt) => {
  const selectedIndex = evt.currentTarget.selectedIndex;
  if (selectedIndex === 1) {
    template(POKE.filterData(dataPoke, 'Water'));
  } else if (selectedIndex === 2) {
    template(POKE.filterData(dataPoke, 'Bug'));
  } else if (selectedIndex === 3) {
    template(POKE.filterData(dataPoke, 'Dragon'));
  } else if (selectedIndex === 4) {
    template(POKE.filterData(dataPoke, 'Electric'));
  } else if (selectedIndex === 5) {
    template(POKE.filterData(dataPoke, 'Ghost'));
  } else if (selectedIndex === 6) {
    template(POKE.filterData(dataPoke, 'Fire'));
  } else if (selectedIndex === 7) {
    template(POKE.filterData(dataPoke, 'Ice'));
  } else if (selectedIndex === 8) {
    template(POKE.filterData(dataPoke, 'Fighting'));
  } else if (selectedIndex === 9) {
    template(POKE.filterData(dataPoke, 'Normal'));
  } else if (selectedIndex === 10) {
    template(POKE.filterData(dataPoke, 'Grass'));
  } else if (selectedIndex === 11) {
    template(POKE.filterData(dataPoke, 'Psychic'));
  } else if (selectedIndex === 12) {
    template(POKE.filterData(dataPoke, 'Rock'));
  } else if (selectedIndex === 13) {
    template(POKE.filterData(dataPoke, 'Ground'));
  } else if (selectedIndex === 14) {
    template(POKE.filterData(dataPoke, 'Poison'));
  } else if (selectedIndex === 15) {
    template(POKE.filterData(dataPoke, 'Flying'));
  } 
});








