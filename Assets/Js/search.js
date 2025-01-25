// Seleziona gli elementi dei filtri
const searchBtn = document.getElementById('search-btn');
const gamePreference = document.getElementById('game-preference');
const availability = document.getElementById('availability');
const geolocation = document.getElementById('geolocation');

// Aggiungi l'evento click al pulsante Search
searchBtn.addEventListener('click', () => {
    // Recupera i valori dei filtri
    const selectedGame = gamePreference.value;
    const selectedDate = availability.value;
    const selectedLocation = geolocation.value;

    // Costruisci un oggetto con i dati
    const searchFilters = {
        game: selectedGame,
        date: selectedDate,
        location: selectedLocation
    };

    // Mostra i filtri in console (debug)
    console.log('Search filters:', searchFilters);

    // Simula il risultato della ricerca
    performSearch(searchFilters);
});

// Funzione per simulare la ricerca
function performSearch(filters) {
    const resultsDiv = document.getElementById('results-list');

    // Esempio di risultati generati
    resultsDiv.innerHTML = `
        <p>Game Preference: ${filters.game}</p>
        <p>Availability: ${filters.date || 'Anytime'}</p>
        <p>Location: ${filters.location || 'Anywhere'}</p>
    `;
}