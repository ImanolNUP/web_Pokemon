async function buscarPokemon() {
  const input = document.getElementById('searchInput').value.toLowerCase().trim();
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = 'Buscando...';

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    if (!res.ok) throw new Error('No encontrado');
    const data = await res.json();

    resultado.innerHTML = `
      <div class="pokemon-card">
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Tipo: ${data.types.map(t => t.type.name).join(', ')}</p>
        <p>ID: ${data.id}</p>
      </div>
    `;
  } catch (error) {
    resultado.innerHTML = '<p>Pokémon no encontrado.</p>';
  }
}