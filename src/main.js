const dataPoke = POKEMON.pokemon;
// Muestra la lista 
const pattern = (list) => {
  let patternListPoke = '';
  // se recorre el array con forEach
  list.forEach((dataPoke) => {
    // creamos un pattern(string) por cada elemento del array
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
    
patternListPoke += card;
  });
  document.getElementById('allThePokemones').innerHTML = patternListPoke;
};
pattern(dataPoke);



// Mostrar Funcion Filter con Select 
document.getElementById('typepokemon').addEventListener('change', (evt) => {
  const selectedIndex = evt.currentTarget.selectedIndex;
  if (selectedIndex === 1) {
    pattern(POKE.filterData(dataPoke, 'Water'));
  } else if (selectedIndex === 2) {
    pattern(POKE.filterData(dataPoke, 'Bug'));
  } else if (selectedIndex === 3) {
    pattern(POKE.filterData(dataPoke, 'Dragon'));
  } else if (selectedIndex === 4) {
    pattern(POKE.filterData(dataPoke, 'Electric'));
  } else if (selectedIndex === 5) {
    pattern(POKE.filterData(dataPoke, 'Ghost'));
  } else if (selectedIndex === 6) {
    pattern(POKE.filterData(dataPoke, 'Fire'));
  } else if (selectedIndex === 7) {
    pattern(POKE.filterData(dataPoke, 'Ice'));
  } else if (selectedIndex === 8) {
    pattern(POKE.filterData(dataPoke, 'Fighting'));
  } else if (selectedIndex === 9) {
    pattern(POKE.filterData(dataPoke, 'Normal'));
  } else if (selectedIndex === 10) {
    pattern(POKE.filterData(dataPoke, 'Grass'));
  } else if (selectedIndex === 11) {
    pattern(POKE.filterData(dataPoke, 'Psychic'));
  } else if (selectedIndex === 12) {
    pattern(POKE.filterData(dataPoke, 'Rock'));
  } else if (selectedIndex === 13) {
    pattern(POKE.filterData(dataPoke, 'Ground'));
  } else if (selectedIndex === 14) {
    pattern(POKE.filterData(dataPoke, 'Poison'));
  } else if (selectedIndex === 15) {
    pattern(POKE.filterData(dataPoke, 'Flying'));
  } 
});








